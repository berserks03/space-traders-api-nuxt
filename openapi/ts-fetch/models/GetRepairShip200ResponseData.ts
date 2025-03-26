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
import type { RepairTransaction } from './RepairTransaction';
import {
    RepairTransactionFromJSON,
    RepairTransactionFromJSONTyped,
    RepairTransactionToJSON,
    RepairTransactionToJSONTyped,
} from './RepairTransaction';

/**
 * 
 * @export
 * @interface GetRepairShip200ResponseData
 */
export interface GetRepairShip200ResponseData {
    /**
     * 
     * @type {RepairTransaction}
     * @memberof GetRepairShip200ResponseData
     */
    transaction: RepairTransaction;
}

/**
 * Check if a given object implements the GetRepairShip200ResponseData interface.
 */
export function instanceOfGetRepairShip200ResponseData(value: object): value is GetRepairShip200ResponseData {
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function GetRepairShip200ResponseDataFromJSON(json: any): GetRepairShip200ResponseData {
    return GetRepairShip200ResponseDataFromJSONTyped(json, false);
}

export function GetRepairShip200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRepairShip200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'transaction': RepairTransactionFromJSON(json['transaction']),
    };
}

export function GetRepairShip200ResponseDataToJSON(json: any): GetRepairShip200ResponseData {
    return GetRepairShip200ResponseDataToJSONTyped(json, false);
}

export function GetRepairShip200ResponseDataToJSONTyped(value?: GetRepairShip200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'transaction': RepairTransactionToJSON(value['transaction']),
    };
}

