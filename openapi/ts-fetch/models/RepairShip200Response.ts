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
import type { RepairShip200ResponseData } from './RepairShip200ResponseData';
import {
    RepairShip200ResponseDataFromJSON,
    RepairShip200ResponseDataFromJSONTyped,
    RepairShip200ResponseDataToJSON,
    RepairShip200ResponseDataToJSONTyped,
} from './RepairShip200ResponseData';

/**
 * 
 * @export
 * @interface RepairShip200Response
 */
export interface RepairShip200Response {
    /**
     * 
     * @type {RepairShip200ResponseData}
     * @memberof RepairShip200Response
     */
    data: RepairShip200ResponseData;
}

/**
 * Check if a given object implements the RepairShip200Response interface.
 */
export function instanceOfRepairShip200Response(value: object): value is RepairShip200Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function RepairShip200ResponseFromJSON(json: any): RepairShip200Response {
    return RepairShip200ResponseFromJSONTyped(json, false);
}

export function RepairShip200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RepairShip200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': RepairShip200ResponseDataFromJSON(json['data']),
    };
}

export function RepairShip200ResponseToJSON(json: any): RepairShip200Response {
    return RepairShip200ResponseToJSONTyped(json, false);
}

export function RepairShip200ResponseToJSONTyped(value?: RepairShip200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': RepairShip200ResponseDataToJSON(value['data']),
    };
}

