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
import type { ShipCargo } from './ShipCargo';
import {
    ShipCargoFromJSON,
    ShipCargoFromJSONTyped,
    ShipCargoToJSON,
    ShipCargoToJSONTyped,
} from './ShipCargo';

/**
 * 
 * @export
 * @interface GetMyShipCargo200Response
 */
export interface GetMyShipCargo200Response {
    /**
     * 
     * @type {ShipCargo}
     * @memberof GetMyShipCargo200Response
     */
    data: ShipCargo;
}

/**
 * Check if a given object implements the GetMyShipCargo200Response interface.
 */
export function instanceOfGetMyShipCargo200Response(value: object): value is GetMyShipCargo200Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetMyShipCargo200ResponseFromJSON(json: any): GetMyShipCargo200Response {
    return GetMyShipCargo200ResponseFromJSONTyped(json, false);
}

export function GetMyShipCargo200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMyShipCargo200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ShipCargoFromJSON(json['data']),
    };
}

export function GetMyShipCargo200ResponseToJSON(json: any): GetMyShipCargo200Response {
    return GetMyShipCargo200ResponseToJSONTyped(json, false);
}

export function GetMyShipCargo200ResponseToJSONTyped(value?: GetMyShipCargo200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ShipCargoToJSON(value['data']),
    };
}

