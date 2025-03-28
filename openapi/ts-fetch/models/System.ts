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
import type { SystemFaction } from './SystemFaction';
import {
    SystemFactionFromJSON,
    SystemFactionFromJSONTyped,
    SystemFactionToJSON,
    SystemFactionToJSONTyped,
} from './SystemFaction';
import type { SystemType } from './SystemType';
import {
    SystemTypeFromJSON,
    SystemTypeFromJSONTyped,
    SystemTypeToJSON,
    SystemTypeToJSONTyped,
} from './SystemType';
import type { SystemWaypoint } from './SystemWaypoint';
import {
    SystemWaypointFromJSON,
    SystemWaypointFromJSONTyped,
    SystemWaypointToJSON,
    SystemWaypointToJSONTyped,
} from './SystemWaypoint';

/**
 * 
 * @export
 * @interface System
 */
export interface System {
    /**
     * The symbol of the system.
     * @type {string}
     * @memberof System
     */
    symbol: string;
    /**
     * The symbol of the sector.
     * @type {string}
     * @memberof System
     */
    sectorSymbol: string;
    /**
     * 
     * @type {SystemType}
     * @memberof System
     */
    type: SystemType;
    /**
     * Relative position of the system in the sector in the x axis.
     * @type {number}
     * @memberof System
     */
    x: number;
    /**
     * Relative position of the system in the sector in the y axis.
     * @type {number}
     * @memberof System
     */
    y: number;
    /**
     * Waypoints in this system.
     * @type {Array<SystemWaypoint>}
     * @memberof System
     */
    waypoints: Array<SystemWaypoint>;
    /**
     * Factions that control this system.
     * @type {Array<SystemFaction>}
     * @memberof System
     */
    factions: Array<SystemFaction>;
}



/**
 * Check if a given object implements the System interface.
 */
export function instanceOfSystem(value: object): value is System {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('sectorSymbol' in value) || value['sectorSymbol'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('x' in value) || value['x'] === undefined) return false;
    if (!('y' in value) || value['y'] === undefined) return false;
    if (!('waypoints' in value) || value['waypoints'] === undefined) return false;
    if (!('factions' in value) || value['factions'] === undefined) return false;
    return true;
}

export function SystemFromJSON(json: any): System {
    return SystemFromJSONTyped(json, false);
}

export function SystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): System {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'sectorSymbol': json['sectorSymbol'],
        'type': SystemTypeFromJSON(json['type']),
        'x': json['x'],
        'y': json['y'],
        'waypoints': ((json['waypoints'] as Array<any>).map(SystemWaypointFromJSON)),
        'factions': ((json['factions'] as Array<any>).map(SystemFactionFromJSON)),
    };
}

export function SystemToJSON(json: any): System {
    return SystemToJSONTyped(json, false);
}

export function SystemToJSONTyped(value?: System | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'sectorSymbol': value['sectorSymbol'],
        'type': SystemTypeToJSON(value['type']),
        'x': value['x'],
        'y': value['y'],
        'waypoints': ((value['waypoints'] as Array<any>).map(SystemWaypointToJSON)),
        'factions': ((value['factions'] as Array<any>).map(SystemFactionToJSON)),
    };
}

