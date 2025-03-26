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
 * A cooldown is a period of time in which a ship cannot perform certain actions.
 * @export
 * @interface Cooldown
 */
export interface Cooldown {
    /**
     * The symbol of the ship that is on cooldown
     * @type {string}
     * @memberof Cooldown
     */
    shipSymbol: string;
    /**
     * The total duration of the cooldown in seconds
     * @type {number}
     * @memberof Cooldown
     */
    totalSeconds: number;
    /**
     * The remaining duration of the cooldown in seconds
     * @type {number}
     * @memberof Cooldown
     */
    remainingSeconds: number;
    /**
     * The date and time when the cooldown expires in ISO 8601 format
     * @type {Date}
     * @memberof Cooldown
     */
    expiration?: Date;
}

/**
 * Check if a given object implements the Cooldown interface.
 */
export function instanceOfCooldown(value: object): value is Cooldown {
    if (!('shipSymbol' in value) || value['shipSymbol'] === undefined) return false;
    if (!('totalSeconds' in value) || value['totalSeconds'] === undefined) return false;
    if (!('remainingSeconds' in value) || value['remainingSeconds'] === undefined) return false;
    return true;
}

export function CooldownFromJSON(json: any): Cooldown {
    return CooldownFromJSONTyped(json, false);
}

export function CooldownFromJSONTyped(json: any, ignoreDiscriminator: boolean): Cooldown {
    if (json == null) {
        return json;
    }
    return {
        
        'shipSymbol': json['shipSymbol'],
        'totalSeconds': json['totalSeconds'],
        'remainingSeconds': json['remainingSeconds'],
        'expiration': json['expiration'] == null ? undefined : (new Date(json['expiration'])),
    };
}

export function CooldownToJSON(json: any): Cooldown {
    return CooldownToJSONTyped(json, false);
}

export function CooldownToJSONTyped(value?: Cooldown | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shipSymbol': value['shipSymbol'],
        'totalSeconds': value['totalSeconds'],
        'remainingSeconds': value['remainingSeconds'],
        'expiration': value['expiration'] == null ? undefined : ((value['expiration']).toISOString()),
    };
}

