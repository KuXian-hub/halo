/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.11-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { RememberMeToken } from '../models';
// @ts-ignore
import { RememberMeTokenList } from '../models';
/**
 * RememberMeTokenV1alpha1Api - axios parameter creator
 * @export
 */
export const RememberMeTokenV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create RememberMeToken
         * @param {RememberMeToken} [rememberMeToken] Fresh remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRememberMeToken: async (rememberMeToken?: RememberMeToken, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(rememberMeToken, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRememberMeToken: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteRememberMeToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRememberMeToken: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getRememberMeToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List RememberMeToken
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRememberMeToken: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRememberMeToken: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchRememberMeToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {RememberMeToken} [rememberMeToken] Updated remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRememberMeToken: async (name: string, rememberMeToken?: RememberMeToken, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateRememberMeToken', 'name', name)
            const localVarPath = `/apis/security.halo.run/v1alpha1/remembermetokens/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(rememberMeToken, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RememberMeTokenV1alpha1Api - functional programming interface
 * @export
 */
export const RememberMeTokenV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RememberMeTokenV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create RememberMeToken
         * @param {RememberMeToken} [rememberMeToken] Fresh remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRememberMeToken(rememberMeToken?: RememberMeToken, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RememberMeToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRememberMeToken(rememberMeToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.createRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRememberMeToken(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRememberMeToken(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.deleteRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRememberMeToken(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RememberMeToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRememberMeToken(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.getRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List RememberMeToken
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRememberMeToken(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RememberMeTokenList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRememberMeToken(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.listRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchRememberMeToken(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RememberMeToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchRememberMeToken(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.patchRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update RememberMeToken
         * @param {string} name Name of remembermetoken
         * @param {RememberMeToken} [rememberMeToken] Updated remembermetoken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRememberMeToken(name: string, rememberMeToken?: RememberMeToken, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RememberMeToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRememberMeToken(name, rememberMeToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RememberMeTokenV1alpha1Api.updateRememberMeToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RememberMeTokenV1alpha1Api - factory interface
 * @export
 */
export const RememberMeTokenV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RememberMeTokenV1alpha1ApiFp(configuration)
    return {
        /**
         * Create RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RememberMeToken> {
            return localVarFp.createRememberMeToken(requestParameters.rememberMeToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteRememberMeToken(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<RememberMeToken> {
            return localVarFp.getRememberMeToken(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiListRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiListRememberMeTokenRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RememberMeTokenList> {
            return localVarFp.listRememberMeToken(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<RememberMeToken> {
            return localVarFp.patchRememberMeToken(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update RememberMeToken
         * @param {RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest, options?: RawAxiosRequestConfig): AxiosPromise<RememberMeToken> {
            return localVarFp.updateRememberMeToken(requestParameters.name, requestParameters.rememberMeToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest {
    /**
     * Fresh remembermetoken
     * @type {RememberMeToken}
     * @memberof RememberMeTokenV1alpha1ApiCreateRememberMeToken
     */
    readonly rememberMeToken?: RememberMeToken
}

/**
 * Request parameters for deleteRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest {
    /**
     * Name of remembermetoken
     * @type {string}
     * @memberof RememberMeTokenV1alpha1ApiDeleteRememberMeToken
     */
    readonly name: string
}

/**
 * Request parameters for getRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest {
    /**
     * Name of remembermetoken
     * @type {string}
     * @memberof RememberMeTokenV1alpha1ApiGetRememberMeToken
     */
    readonly name: string
}

/**
 * Request parameters for listRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiListRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiListRememberMeTokenRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof RememberMeTokenV1alpha1ApiListRememberMeToken
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof RememberMeTokenV1alpha1ApiListRememberMeToken
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof RememberMeTokenV1alpha1ApiListRememberMeToken
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof RememberMeTokenV1alpha1ApiListRememberMeToken
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof RememberMeTokenV1alpha1ApiListRememberMeToken
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest {
    /**
     * Name of remembermetoken
     * @type {string}
     * @memberof RememberMeTokenV1alpha1ApiPatchRememberMeToken
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof RememberMeTokenV1alpha1ApiPatchRememberMeToken
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateRememberMeToken operation in RememberMeTokenV1alpha1Api.
 * @export
 * @interface RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest
 */
export interface RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest {
    /**
     * Name of remembermetoken
     * @type {string}
     * @memberof RememberMeTokenV1alpha1ApiUpdateRememberMeToken
     */
    readonly name: string

    /**
     * Updated remembermetoken
     * @type {RememberMeToken}
     * @memberof RememberMeTokenV1alpha1ApiUpdateRememberMeToken
     */
    readonly rememberMeToken?: RememberMeToken
}

/**
 * RememberMeTokenV1alpha1Api - object-oriented interface
 * @export
 * @class RememberMeTokenV1alpha1Api
 * @extends {BaseAPI}
 */
export class RememberMeTokenV1alpha1Api extends BaseAPI {
    /**
     * Create RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public createRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiCreateRememberMeTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).createRememberMeToken(requestParameters.rememberMeToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public deleteRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiDeleteRememberMeTokenRequest, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).deleteRememberMeToken(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public getRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiGetRememberMeTokenRequest, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).getRememberMeToken(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiListRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public listRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiListRememberMeTokenRequest = {}, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).listRememberMeToken(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public patchRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiPatchRememberMeTokenRequest, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).patchRememberMeToken(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update RememberMeToken
     * @param {RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RememberMeTokenV1alpha1Api
     */
    public updateRememberMeToken(requestParameters: RememberMeTokenV1alpha1ApiUpdateRememberMeTokenRequest, options?: RawAxiosRequestConfig) {
        return RememberMeTokenV1alpha1ApiFp(this.configuration).updateRememberMeToken(requestParameters.name, requestParameters.rememberMeToken, options).then((request) => request(this.axios, this.basePath));
    }
}

