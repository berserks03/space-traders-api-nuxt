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
 * A yield from the siphon operation.
 * @export
 * @interface SiphonYield
 */
export interface SiphonYield {
    /**
     * 
     * @type {TradeSymbol}
     * @memberof SiphonYield
     */
    symbol: TradeSymbol;
    /**
     * The number of units siphoned that were placed into the ship's cargo hold.
     * @type {number}
     * @memberof SiphonYield
     */
    units: number;
}



/**
 * Check if a given object implements the SiphonYield interface.
 */
export function instanceOfSiphonYield(value: object): value is SiphonYield {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('units' in value) || value['units'] === undefined) return false;
    return true;
}

export function SiphonYieldFromJSON(json: any): SiphonYield {
    return SiphonYieldFromJSONTyped(json, false);
}

export function SiphonYieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): SiphonYield {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': TradeSymbolFromJSON(json['symbol']),
        'units': json['units'],
    };
}

export function SiphonYieldToJSON(json: any): SiphonYield {
    return SiphonYieldToJSONTyped(json, false);
}

export function SiphonYieldToJSONTyped(value?: SiphonYield | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': TradeSymbolToJSON(value['symbol']),
        'units': value['units'],
    };
}

