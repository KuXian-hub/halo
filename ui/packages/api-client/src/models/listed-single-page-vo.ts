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


// May contain unused imports in some cases
// @ts-ignore
import { ContributorVo } from './contributor-vo';
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from './metadata';
// May contain unused imports in some cases
// @ts-ignore
import { SinglePageSpec } from './single-page-spec';
// May contain unused imports in some cases
// @ts-ignore
import { SinglePageStatus } from './single-page-status';
// May contain unused imports in some cases
// @ts-ignore
import { StatsVo } from './stats-vo';

/**
 * A chunk of items.
 * @export
 * @interface ListedSinglePageVo
 */
export interface ListedSinglePageVo {
    /**
     * 
     * @type {Array<ContributorVo>}
     * @memberof ListedSinglePageVo
     */
    'contributors'?: Array<ContributorVo>;
    /**
     * 
     * @type {Metadata}
     * @memberof ListedSinglePageVo
     */
    'metadata': Metadata;
    /**
     * 
     * @type {ContributorVo}
     * @memberof ListedSinglePageVo
     */
    'owner'?: ContributorVo;
    /**
     * 
     * @type {SinglePageSpec}
     * @memberof ListedSinglePageVo
     */
    'spec'?: SinglePageSpec;
    /**
     * 
     * @type {StatsVo}
     * @memberof ListedSinglePageVo
     */
    'stats'?: StatsVo;
    /**
     * 
     * @type {SinglePageStatus}
     * @memberof ListedSinglePageVo
     */
    'status'?: SinglePageStatus;
}

