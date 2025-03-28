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
import type { PurchaseShip201ResponseData } from './PurchaseShip201ResponseData';
import {
    PurchaseShip201ResponseDataFromJSON,
    PurchaseShip201ResponseDataFromJSONTyped,
    PurchaseShip201ResponseDataToJSON,
    PurchaseShip201ResponseDataToJSONTyped,
} from './PurchaseShip201ResponseData';

/**
 * 
 * @export
 * @interface PurchaseShip201Response
 */
export interface PurchaseShip201Response {
    /**
     * 
     * @type {PurchaseShip201ResponseData}
     * @memberof PurchaseShip201Response
     */
    data: PurchaseShip201ResponseData;
}

/**
 * Check if a given object implements the PurchaseShip201Response interface.
 */
export function instanceOfPurchaseShip201Response(value: object): value is PurchaseShip201Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function PurchaseShip201ResponseFromJSON(json: any): PurchaseShip201Response {
    return PurchaseShip201ResponseFromJSONTyped(json, false);
}

export function PurchaseShip201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseShip201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PurchaseShip201ResponseDataFromJSON(json['data']),
    };
}

export function PurchaseShip201ResponseToJSON(json: any): PurchaseShip201Response {
    return PurchaseShip201ResponseToJSONTyped(json, false);
}

export function PurchaseShip201ResponseToJSONTyped(value?: PurchaseShip201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PurchaseShip201ResponseDataToJSON(value['data']),
    };
}

