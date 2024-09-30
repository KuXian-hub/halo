package run.halo.app.infra.config;

import static org.springframework.security.web.server.authentication.ServerWebExchangeDelegatingReactiveAuthenticationManagerResolver.builder;
import static org.springframework.security.web.server.util.matcher.ServerWebExchangeMatchers.pathMatchers;

import java.util.Collections;
import java.util.concurrent.ConcurrentHashMap;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.session.SessionProperties;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.context.ServerSecurityContextRepository;
import org.springframework.security.web.server.context.WebSessionServerSecurityContextRepository;
import org.springframework.security.web.server.util.matcher.AndServerWebExchangeMatcher;
import org.springframework.security.web.server.util.matcher.MediaTypeServerWebExchangeMatcher;
import org.springframework.security.web.server.util.matcher.NegatedServerWebExchangeMatcher;
import org.springframework.security.web.server.util.matcher.ServerWebExchangeMatcher;
import org.springframework.security.web.server.util.matcher.ServerWebExchangeMatchers;
import org.springframework.session.MapSession;
import org.springframework.session.config.annotation.web.server.EnableSpringWebSession;
import reactor.core.publisher.Mono;
import run.halo.app.core.user.service.RoleService;
import run.halo.app.core.user.service.UserService;
import run.halo.app.extension.ReactiveExtensionClient;
import run.halo.app.infra.AnonymousUserConst;
import run.halo.app.infra.properties.HaloProperties;
import run.halo.app.security.DefaultUserDetailService;
import run.halo.app.security.authentication.CryptoService;
import run.halo.app.security.authentication.SecurityConfigurer;
import run.halo.app.security.authentication.impl.RsaKeyService;
import run.halo.app.security.authentication.pat.PatAuthenticationManager;
import run.halo.app.security.authentication.pat.PatServerWebExchangeMatcher;
import run.halo.app.security.authorization.AuthorityUtils;
import run.halo.app.security.authorization.RequestInfoAuthorizationManager;
import run.halo.app.security.session.InMemoryReactiveIndexedSessionRepository;
import run.halo.app.security.session.ReactiveIndexedSessionRepository;

/**
 * Security configuration for WebFlux.
 *
 * @author johnniang
 */
@Configuration
@EnableSpringWebSession
@EnableWebFluxSecurity
@RequiredArgsConstructor
public class WebServerSecurityConfig {

    @Bean
    SecurityWebFilterChain filterChain(ServerHttpSecurity http,
        RoleService roleService,
        ObjectProvider<SecurityConfigurer> securityConfigurers,
        ServerSecurityContextRepository securityContextRepository,
        ReactiveExtensionClient client,
        CryptoService cryptoService,
        HaloProperties haloProperties) {

        var pathMatcher = pathMatchers("/**");
        var staticResourcesMatcher = pathMatchers(HttpMethod.GET,
            "/themes/{themeName}/assets/{*resourcePaths}",
            "/plugins/{pluginName}/assets/**",
            "/upload/**",
            "/webjars/**",
            "/js/**",
            "/styles/**",
            "/halo-tracker.js",
            "/images/**"
        );

        var securityMatcher = new AndServerWebExchangeMatcher(pathMatcher,
            new NegatedServerWebExchangeMatcher(staticResourcesMatcher));

        http.securityMatcher(securityMatcher)
            .authorizeExchange(spec -> spec.pathMatchers(
                    "/api/**",
                    "/apis/**",
                    "/actuator/**"
                ).access(new RequestInfoAuthorizationManager(roleService))
                .pathMatchers(
                    "/login/**",
                    "/challenges/**",
                    "/password-reset/**",
                    "/signup",
                    "/logout"
                ).permitAll()
                .pathMatchers("/console/**", "/uc/**").authenticated()
                .matchers(createHtmlMatcher()).access((authentication, context) ->
                    // we only need to check the authentication is authenticated
                    // because we treat anonymous user as authenticated
                    authentication.map(Authentication::isAuthenticated)
                        .map(AuthorizationDecision::new)
                        .switchIfEmpty(Mono.fromSupplier(() -> new AuthorizationDecision(false)))
                )
                .anyExchange().permitAll())
            .anonymous(spec -> {
                spec.authorities(AuthorityUtils.ROLE_PREFIX + AnonymousUserConst.Role);
                spec.principal(AnonymousUserConst.PRINCIPAL);
            })
            .securityContextRepository(securityContextRepository)
            .httpBasic(basic -> {
                if (haloProperties.getSecurity().getBasicAuth().isDisabled()) {
                    basic.disable();
                }
            })
            .oauth2ResourceServer(oauth2 -> {
                var authManagerResolver = builder().add(
                        new PatServerWebExchangeMatcher(),
                        new PatAuthenticationManager(client, cryptoService)
                    )
                    // TODO Add other authentication mangers here. e.g.: JwtAuthenticationManager.
                    .build();
                oauth2.authenticationManagerResolver(authManagerResolver);
            })
            .headers(headerSpec -> headerSpec
                .frameOptions(frameSpec -> {
                    var frameOptions = haloProperties.getSecurity().getFrameOptions();
                    frameSpec.mode(frameOptions.getMode());
                    if (frameOptions.isDisabled()) {
                        frameSpec.disable();
                    }
                })
                .referrerPolicy(referrerPolicySpec -> referrerPolicySpec.policy(
                    haloProperties.getSecurity().getReferrerOptions().getPolicy())
                )
                .hsts(hstsSpec -> hstsSpec.includeSubdomains(false))
            );

        // Integrate with other configurers separately
        securityConfigurers.orderedStream()
            .forEach(securityConfigurer -> securityConfigurer.configure(http));
        return http.build();
    }

    @Bean
    ServerSecurityContextRepository securityContextRepository() {
        return new WebSessionServerSecurityContextRepository();
    }

    @Bean
    public ReactiveIndexedSessionRepository<MapSession> reactiveSessionRepository(
        SessionProperties sessionProperties,
        ServerProperties serverProperties) {
        var repository = new InMemoryReactiveIndexedSessionRepository(new ConcurrentHashMap<>());
        var timeout = sessionProperties.determineTimeout(
            () -> serverProperties.getReactive().getSession().getTimeout());
        repository.setDefaultMaxInactiveInterval(timeout);
        return repository;
    }

    @Bean
    DefaultUserDetailService userDetailsService(UserService userService,
        RoleService roleService,
        HaloProperties haloProperties) {
        var userDetailService = new DefaultUserDetailService(userService, roleService);
        var twoFactorAuthDisabled = haloProperties.getSecurity().getTwoFactorAuth().isDisabled();
        userDetailService.setTwoFactorAuthDisabled(twoFactorAuthDisabled);
        return userDetailService;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CryptoService cryptoService(HaloProperties haloProperties) {
        return new RsaKeyService(haloProperties.getWorkDir().resolve("keys"));
    }

    private static ServerWebExchangeMatcher createHtmlMatcher() {
        ServerWebExchangeMatcher get =
            ServerWebExchangeMatchers.pathMatchers(HttpMethod.GET, "/**");
        ServerWebExchangeMatcher notFavicon = new NegatedServerWebExchangeMatcher(
            ServerWebExchangeMatchers.pathMatchers("/favicon.*"));
        MediaTypeServerWebExchangeMatcher html =
            new MediaTypeServerWebExchangeMatcher(MediaType.TEXT_HTML);
        html.setIgnoredMediaTypes(Collections.singleton(MediaType.ALL));
        return new AndServerWebExchangeMatcher(get, notFavicon, html);
    }
}