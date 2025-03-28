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
import type { FactionSymbol } from './FactionSymbol';
import {
    FactionSymbolFromJSON,
    FactionSymbolFromJSONTyped,
    FactionSymbolToJSON,
    FactionSymbolToJSONTyped,
} from './FactionSymbol';
import type { FactionTrait } from './FactionTrait';
import {
    FactionTraitFromJSON,
    FactionTraitFromJSONTyped,
    FactionTraitToJSON,
    FactionTraitToJSONTyped,
} from './FactionTrait';

/**
 * Faction details.
 * @export
 * @interface Faction
 */
export interface Faction {
    /**
     * 
     * @type {FactionSymbol}
     * @memberof Faction
     */
    symbol: FactionSymbol;
    /**
     * Name of the faction.
     * @type {string}
     * @memberof Faction
     */
    name: string;
    /**
     * Description of the faction.
     * @type {string}
     * @memberof Faction
     */
    description: string;
    /**
     * The waypoint in which the faction's HQ is located in.
     * @type {string}
     * @memberof Faction
     */
    headquarters?: string;
    /**
     * List of traits that define this faction.
     * @type {Array<FactionTrait>}
     * @memberof Faction
     */
    traits: Array<FactionTrait>;
    /**
     * Whether or not the faction is currently recruiting new agents.
     * @type {boolean}
     * @memberof Faction
     */
    isRecruiting: boolean;
}



/**
 * Check if a given object implements the Faction interface.
 */
export function instanceOfFaction(value: object): value is Faction {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('traits' in value) || value['traits'] === undefined) return false;
    if (!('isRecruiting' in value) || value['isRecruiting'] === undefined) return false;
    return true;
}

export function FactionFromJSON(json: any): Faction {
    return FactionFromJSONTyped(json, false);
}

export function FactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Faction {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': FactionSymbolFromJSON(json['symbol']),
        'name': json['name'],
        'description': json['description'],
        'headquarters': json['headquarters'] == null ? undefined : json['headquarters'],
        'traits': ((json['traits'] as Array<any>).map(FactionTraitFromJSON)),
        'isRecruiting': json['isRecruiting'],
    };
}

export function FactionToJSON(json: any): Faction {
    return FactionToJSONTyped(json, false);
}

export function FactionToJSONTyped(value?: Faction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': FactionSymbolToJSON(value['symbol']),
        'name': value['name'],
        'description': value['description'],
        'headquarters': value['headquarters'],
        'traits': ((value['traits'] as Array<any>).map(FactionTraitToJSON)),
        'isRecruiting': value['isRecruiting'],
    };
}

