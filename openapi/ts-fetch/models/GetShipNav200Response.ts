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
import type { ShipNav } from './ShipNav';
import {
    ShipNavFromJSON,
    ShipNavFromJSONTyped,
    ShipNavToJSON,
    ShipNavToJSONTyped,
} from './ShipNav';

/**
 * 
 * @export
 * @interface GetShipNav200Response
 */
export interface GetShipNav200Response {
    /**
     * 
     * @type {ShipNav}
     * @memberof GetShipNav200Response
     */
    data: ShipNav;
}

/**
 * Check if a given object implements the GetShipNav200Response interface.
 */
export function instanceOfGetShipNav200Response(value: object): value is GetShipNav200Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetShipNav200ResponseFromJSON(json: any): GetShipNav200Response {
    return GetShipNav200ResponseFromJSONTyped(json, false);
}

export function GetShipNav200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetShipNav200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ShipNavFromJSON(json['data']),
    };
}

export function GetShipNav200ResponseToJSON(json: any): GetShipNav200Response {
    return GetShipNav200ResponseToJSONTyped(json, false);
}

export function GetShipNav200ResponseToJSONTyped(value?: GetShipNav200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ShipNavToJSON(value['data']),
    };
}

