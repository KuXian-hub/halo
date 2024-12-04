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
import { AuthProvider } from './auth-provider';

/**
 * 
 * @export
 * @interface AuthProviderList
 */
export interface AuthProviderList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof AuthProviderList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof AuthProviderList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof AuthProviderList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<AuthProvider>}
     * @memberof AuthProviderList
     */
    'items': Array<AuthProvider>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof AuthProviderList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof AuthProviderList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof AuthProviderList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof AuthProviderList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof AuthProviderList
     */
    'totalPages': number;
}

