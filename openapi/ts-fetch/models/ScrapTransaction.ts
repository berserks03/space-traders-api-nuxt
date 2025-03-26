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
/**
 * Result of a scrap transaction.
 * @export
 * @interface ScrapTransaction
 */
export interface ScrapTransaction {
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof ScrapTransaction
     */
    waypointSymbol: string;
    /**
     * The symbol of the ship.
     * @type {string}
     * @memberof ScrapTransaction
     */
    shipSymbol: string;
    /**
     * The total price of the transaction.
     * @type {number}
     * @memberof ScrapTransaction
     */
    totalPrice: number;
    /**
     * The timestamp of the transaction.
     * @type {Date}
     * @memberof ScrapTransaction
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the ScrapTransaction interface.
 */
export function instanceOfScrapTransaction(value: object): value is ScrapTransaction {
    if (!('waypointSymbol' in value) || value['waypointSymbol'] === undefined) return false;
    if (!('shipSymbol' in value) || value['shipSymbol'] === undefined) return false;
    if (!('totalPrice' in value) || value['totalPrice'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function ScrapTransactionFromJSON(json: any): ScrapTransaction {
    return ScrapTransactionFromJSONTyped(json, false);
}

export function ScrapTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScrapTransaction {
    if (json == null) {
        return json;
    }
    return {
        
        'waypointSymbol': json['waypointSymbol'],
        'shipSymbol': json['shipSymbol'],
        'totalPrice': json['totalPrice'],
        'timestamp': (new Date(json['timestamp'])),
    };
}

export function ScrapTransactionToJSON(json: any): ScrapTransaction {
    return ScrapTransactionToJSONTyped(json, false);
}

export function ScrapTransactionToJSONTyped(value?: ScrapTransaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'waypointSymbol': value['waypointSymbol'],
        'shipSymbol': value['shipSymbol'],
        'totalPrice': value['totalPrice'],
        'timestamp': ((value['timestamp']).toISOString()),
    };
}

