/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { System } from './System';
import {
    SystemFromJSON,
    SystemFromJSONTyped,
    SystemToJSON,
    SystemToJSONTyped,
} from './System';

/**
 * 
 * @export
 * @interface GetSystem200Response
 */
export interface GetSystem200Response {
    /**
     * 
     * @type {System}
     * @memberof GetSystem200Response
     */
    data: System;
}

/**
 * Check if a given object implements the GetSystem200Response interface.
 */
export function instanceOfGetSystem200Response(value: object): value is GetSystem200Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetSystem200ResponseFromJSON(json: any): GetSystem200Response {
    return GetSystem200ResponseFromJSONTyped(json, false);
}

export function GetSystem200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSystem200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': SystemFromJSON(json['data']),
    };
}

export function GetSystem200ResponseToJSON(json: any): GetSystem200Response {
    return GetSystem200ResponseToJSONTyped(json, false);
}

export function GetSystem200ResponseToJSONTyped(value?: GetSystem200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SystemToJSON(value['data']),
    };
}

