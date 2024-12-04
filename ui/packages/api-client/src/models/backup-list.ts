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
import { Backup } from './backup';

/**
 * 
 * @export
 * @interface BackupList
 */
export interface BackupList {
    /**
     * Indicates whether current page is the first page.
     * @type {boolean}
     * @memberof BackupList
     */
    'first': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof BackupList
     */
    'hasNext': boolean;
    /**
     * Indicates whether current page has previous page.
     * @type {boolean}
     * @memberof BackupList
     */
    'hasPrevious': boolean;
    /**
     * A chunk of items.
     * @type {Array<Backup>}
     * @memberof BackupList
     */
    'items': Array<Backup>;
    /**
     * Indicates whether current page is the last page.
     * @type {boolean}
     * @memberof BackupList
     */
    'last': boolean;
    /**
     * Page number, starts from 1. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof BackupList
     */
    'page': number;
    /**
     * Size of each page. If not set or equal to 0, it means no pagination.
     * @type {number}
     * @memberof BackupList
     */
    'size': number;
    /**
     * Total elements.
     * @type {number}
     * @memberof BackupList
     */
    'total': number;
    /**
     * Indicates total pages.
     * @type {number}
     * @memberof BackupList
     */
    'totalPages': number;
}

