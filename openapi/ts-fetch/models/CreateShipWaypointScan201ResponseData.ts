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
import type { Cooldown } from './Cooldown';
import {
    CooldownFromJSON,
    CooldownFromJSONTyped,
    CooldownToJSON,
    CooldownToJSONTyped,
} from './Cooldown';
import type { ScannedWaypoint } from './ScannedWaypoint';
import {
    ScannedWaypointFromJSON,
    ScannedWaypointFromJSONTyped,
    ScannedWaypointToJSON,
    ScannedWaypointToJSONTyped,
} from './ScannedWaypoint';

/**
 * 
 * @export
 * @interface CreateShipWaypointScan201ResponseData
 */
export interface CreateShipWaypointScan201ResponseData {
    /**
     * 
     * @type {Cooldown}
     * @memberof CreateShipWaypointScan201ResponseData
     */
    cooldown: Cooldown;
    /**
     * List of scanned waypoints.
     * @type {Array<ScannedWaypoint>}
     * @memberof CreateShipWaypointScan201ResponseData
     */
    waypoints: Array<ScannedWaypoint>;
}

/**
 * Check if a given object implements the CreateShipWaypointScan201ResponseData interface.
 */
export function instanceOfCreateShipWaypointScan201ResponseData(value: object): value is CreateShipWaypointScan201ResponseData {
    if (!('cooldown' in value) || value['cooldown'] === undefined) return false;
    if (!('waypoints' in value) || value['waypoints'] === undefined) return false;
    return true;
}

export function CreateShipWaypointScan201ResponseDataFromJSON(json: any): CreateShipWaypointScan201ResponseData {
    return CreateShipWaypointScan201ResponseDataFromJSONTyped(json, false);
}

export function CreateShipWaypointScan201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShipWaypointScan201ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'cooldown': CooldownFromJSON(json['cooldown']),
        'waypoints': ((json['waypoints'] as Array<any>).map(ScannedWaypointFromJSON)),
    };
}

export function CreateShipWaypointScan201ResponseDataToJSON(json: any): CreateShipWaypointScan201ResponseData {
    return CreateShipWaypointScan201ResponseDataToJSONTyped(json, false);
}

export function CreateShipWaypointScan201ResponseDataToJSONTyped(value?: CreateShipWaypointScan201ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cooldown': CooldownToJSON(value['cooldown']),
        'waypoints': ((value['waypoints'] as Array<any>).map(ScannedWaypointToJSON)),
    };
}

