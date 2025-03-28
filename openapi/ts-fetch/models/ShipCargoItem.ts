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
import type { TradeSymbol } from './TradeSymbol';
import {
    TradeSymbolFromJSON,
    TradeSymbolFromJSONTyped,
    TradeSymbolToJSON,
    TradeSymbolToJSONTyped,
} from './TradeSymbol';

/**
 * The type of cargo item and the number of units.
 * @export
 * @interface ShipCargoItem
 */
export interface ShipCargoItem {
    /**
     * 
     * @type {TradeSymbol}
     * @memberof ShipCargoItem
     */
    symbol: TradeSymbol;
    /**
     * The name of the cargo item type.
     * @type {string}
     * @memberof ShipCargoItem
     */
    name: string;
    /**
     * The description of the cargo item type.
     * @type {string}
     * @memberof ShipCargoItem
     */
    description: string;
    /**
     * The number of units of the cargo item.
     * @type {number}
     * @memberof ShipCargoItem
     */
    units: number;
}



/**
 * Check if a given object implements the ShipCargoItem interface.
 */
export function instanceOfShipCargoItem(value: object): value is ShipCargoItem {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('units' in value) || value['units'] === undefined) return false;
    return true;
}

export function ShipCargoItemFromJSON(json: any): ShipCargoItem {
    return ShipCargoItemFromJSONTyped(json, false);
}

export function ShipCargoItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipCargoItem {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': TradeSymbolFromJSON(json['symbol']),
        'name': json['name'],
        'description': json['description'],
        'units': json['units'],
    };
}

export function ShipCargoItemToJSON(json: any): ShipCargoItem {
    return ShipCargoItemToJSONTyped(json, false);
}

export function ShipCargoItemToJSONTyped(value?: ShipCargoItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': TradeSymbolToJSON(value['symbol']),
        'name': value['name'],
        'description': value['description'],
        'units': value['units'],
    };
}

