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



/**
 * 
 * @export
 * @interface BackupSpec
 */
export interface BackupSpec {
    /**
     * 
     * @type {string}
     * @memberof BackupSpec
     */
    'expiresAt'?: string;
    /**
     * Backup file format. Currently, only zip format is supported.
     * @type {string}
     * @memberof BackupSpec
     */
    'format'?: string;
}

