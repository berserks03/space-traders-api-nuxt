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
 * @interface Jettison200ResponseData
 */
export interface Jettison200ResponseData {
    /**
     * 
     * @type {ShipCargo}
     * @memberof Jettison200ResponseData
     */
    cargo: ShipCargo;
}

/**
 * Check if a given object implements the Jettison200ResponseData interface.
 */
export function instanceOfJettison200ResponseData(value: object): value is Jettison200ResponseData {
    if (!('cargo' in value) || value['cargo'] === undefined) return false;
    return true;
}

export function Jettison200ResponseDataFromJSON(json: any): Jettison200ResponseData {
    return Jettison200ResponseDataFromJSONTyped(json, false);
}

export function Jettison200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Jettison200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'cargo': ShipCargoFromJSON(json['cargo']),
    };
}

export function Jettison200ResponseDataToJSON(json: any): Jettison200ResponseData {
    return Jettison200ResponseDataToJSONTyped(json, false);
}

export function Jettison200ResponseDataToJSONTyped(value?: Jettison200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cargo': ShipCargoToJSON(value['cargo']),
    };
}

