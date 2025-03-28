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
import type { ShipFuel } from './ShipFuel';
import {
    ShipFuelFromJSON,
    ShipFuelFromJSONTyped,
    ShipFuelToJSON,
    ShipFuelToJSONTyped,
} from './ShipFuel';
import type { Agent } from './Agent';
import {
    AgentFromJSON,
    AgentFromJSONTyped,
    AgentToJSON,
    AgentToJSONTyped,
} from './Agent';
import type { MarketTransaction } from './MarketTransaction';
import {
    MarketTransactionFromJSON,
    MarketTransactionFromJSONTyped,
    MarketTransactionToJSON,
    MarketTransactionToJSONTyped,
} from './MarketTransaction';

/**
 * 
 * @export
 * @interface RefuelShip200ResponseData
 */
export interface RefuelShip200ResponseData {
    /**
     * 
     * @type {Agent}
     * @memberof RefuelShip200ResponseData
     */
    agent: Agent;
    /**
     * 
     * @type {ShipFuel}
     * @memberof RefuelShip200ResponseData
     */
    fuel: ShipFuel;
    /**
     * 
     * @type {MarketTransaction}
     * @memberof RefuelShip200ResponseData
     */
    transaction: MarketTransaction;
}

/**
 * Check if a given object implements the RefuelShip200ResponseData interface.
 */
export function instanceOfRefuelShip200ResponseData(value: object): value is RefuelShip200ResponseData {
    if (!('agent' in value) || value['agent'] === undefined) return false;
    if (!('fuel' in value) || value['fuel'] === undefined) return false;
    if (!('transaction' in value) || value['transaction'] === undefined) return false;
    return true;
}

export function RefuelShip200ResponseDataFromJSON(json: any): RefuelShip200ResponseData {
    return RefuelShip200ResponseDataFromJSONTyped(json, false);
}

export function RefuelShip200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefuelShip200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'agent': AgentFromJSON(json['agent']),
        'fuel': ShipFuelFromJSON(json['fuel']),
        'transaction': MarketTransactionFromJSON(json['transaction']),
    };
}

export function RefuelShip200ResponseDataToJSON(json: any): RefuelShip200ResponseData {
    return RefuelShip200ResponseDataToJSONTyped(json, false);
}

export function RefuelShip200ResponseDataToJSONTyped(value?: RefuelShip200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'agent': AgentToJSON(value['agent']),
        'fuel': ShipFuelToJSON(value['fuel']),
        'transaction': MarketTransactionToJSON(value['transaction']),
    };
}

