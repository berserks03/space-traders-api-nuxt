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
import type { ShipEngine } from './ShipEngine';
import {
    ShipEngineFromJSON,
    ShipEngineFromJSONTyped,
    ShipEngineToJSON,
    ShipEngineToJSONTyped,
} from './ShipEngine';
import type { ShipFuel } from './ShipFuel';
import {
    ShipFuelFromJSON,
    ShipFuelFromJSONTyped,
    ShipFuelToJSON,
    ShipFuelToJSONTyped,
} from './ShipFuel';
import type { ShipRegistration } from './ShipRegistration';
import {
    ShipRegistrationFromJSON,
    ShipRegistrationFromJSONTyped,
    ShipRegistrationToJSON,
    ShipRegistrationToJSONTyped,
} from './ShipRegistration';
import type { ShipCargo } from './ShipCargo';
import {
    ShipCargoFromJSON,
    ShipCargoFromJSONTyped,
    ShipCargoToJSON,
    ShipCargoToJSONTyped,
} from './ShipCargo';
import type { ShipMount } from './ShipMount';
import {
    ShipMountFromJSON,
    ShipMountFromJSONTyped,
    ShipMountToJSON,
    ShipMountToJSONTyped,
} from './ShipMount';
import type { Cooldown } from './Cooldown';
import {
    CooldownFromJSON,
    CooldownFromJSONTyped,
    CooldownToJSON,
    CooldownToJSONTyped,
} from './Cooldown';
import type { ShipFrame } from './ShipFrame';
import {
    ShipFrameFromJSON,
    ShipFrameFromJSONTyped,
    ShipFrameToJSON,
    ShipFrameToJSONTyped,
} from './ShipFrame';
import type { ShipReactor } from './ShipReactor';
import {
    ShipReactorFromJSON,
    ShipReactorFromJSONTyped,
    ShipReactorToJSON,
    ShipReactorToJSONTyped,
} from './ShipReactor';
import type { ShipModule } from './ShipModule';
import {
    ShipModuleFromJSON,
    ShipModuleFromJSONTyped,
    ShipModuleToJSON,
    ShipModuleToJSONTyped,
} from './ShipModule';
import type { ShipCrew } from './ShipCrew';
import {
    ShipCrewFromJSON,
    ShipCrewFromJSONTyped,
    ShipCrewToJSON,
    ShipCrewToJSONTyped,
} from './ShipCrew';
import type { ShipNav } from './ShipNav';
import {
    ShipNavFromJSON,
    ShipNavFromJSONTyped,
    ShipNavToJSON,
    ShipNavToJSONTyped,
} from './ShipNav';

/**
 * Ship details.
 * @export
 * @interface Ship
 */
export interface Ship {
    /**
     * The globally unique identifier of the ship in the following format: `[AGENT_SYMBOL]-[HEX_ID]`
     * @type {string}
     * @memberof Ship
     */
    symbol: string;
    /**
     * 
     * @type {ShipRegistration}
     * @memberof Ship
     */
    registration: ShipRegistration;
    /**
     * 
     * @type {ShipNav}
     * @memberof Ship
     */
    nav: ShipNav;
    /**
     * 
     * @type {ShipCrew}
     * @memberof Ship
     */
    crew: ShipCrew;
    /**
     * 
     * @type {ShipFrame}
     * @memberof Ship
     */
    frame: ShipFrame;
    /**
     * 
     * @type {ShipReactor}
     * @memberof Ship
     */
    reactor: ShipReactor;
    /**
     * 
     * @type {ShipEngine}
     * @memberof Ship
     */
    engine: ShipEngine;
    /**
     * 
     * @type {Cooldown}
     * @memberof Ship
     */
    cooldown: Cooldown;
    /**
     * Modules installed in this ship.
     * @type {Array<ShipModule>}
     * @memberof Ship
     */
    modules: Array<ShipModule>;
    /**
     * Mounts installed in this ship.
     * @type {Array<ShipMount>}
     * @memberof Ship
     */
    mounts: Array<ShipMount>;
    /**
     * 
     * @type {ShipCargo}
     * @memberof Ship
     */
    cargo: ShipCargo;
    /**
     * 
     * @type {ShipFuel}
     * @memberof Ship
     */
    fuel: ShipFuel;
}

/**
 * Check if a given object implements the Ship interface.
 */
export function instanceOfShip(value: object): value is Ship {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('registration' in value) || value['registration'] === undefined) return false;
    if (!('nav' in value) || value['nav'] === undefined) return false;
    if (!('crew' in value) || value['crew'] === undefined) return false;
    if (!('frame' in value) || value['frame'] === undefined) return false;
    if (!('reactor' in value) || value['reactor'] === undefined) return false;
    if (!('engine' in value) || value['engine'] === undefined) return false;
    if (!('cooldown' in value) || value['cooldown'] === undefined) return false;
    if (!('modules' in value) || value['modules'] === undefined) return false;
    if (!('mounts' in value) || value['mounts'] === undefined) return false;
    if (!('cargo' in value) || value['cargo'] === undefined) return false;
    if (!('fuel' in value) || value['fuel'] === undefined) return false;
    return true;
}

export function ShipFromJSON(json: any): Ship {
    return ShipFromJSONTyped(json, false);
}

export function ShipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ship {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'registration': ShipRegistrationFromJSON(json['registration']),
        'nav': ShipNavFromJSON(json['nav']),
        'crew': ShipCrewFromJSON(json['crew']),
        'frame': ShipFrameFromJSON(json['frame']),
        'reactor': ShipReactorFromJSON(json['reactor']),
        'engine': ShipEngineFromJSON(json['engine']),
        'cooldown': CooldownFromJSON(json['cooldown']),
        'modules': ((json['modules'] as Array<any>).map(ShipModuleFromJSON)),
        'mounts': ((json['mounts'] as Array<any>).map(ShipMountFromJSON)),
        'cargo': ShipCargoFromJSON(json['cargo']),
        'fuel': ShipFuelFromJSON(json['fuel']),
    };
}

export function ShipToJSON(json: any): Ship {
    return ShipToJSONTyped(json, false);
}

export function ShipToJSONTyped(value?: Ship | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'registration': ShipRegistrationToJSON(value['registration']),
        'nav': ShipNavToJSON(value['nav']),
        'crew': ShipCrewToJSON(value['crew']),
        'frame': ShipFrameToJSON(value['frame']),
        'reactor': ShipReactorToJSON(value['reactor']),
        'engine': ShipEngineToJSON(value['engine']),
        'cooldown': CooldownToJSON(value['cooldown']),
        'modules': ((value['modules'] as Array<any>).map(ShipModuleToJSON)),
        'mounts': ((value['mounts'] as Array<any>).map(ShipMountToJSON)),
        'cargo': ShipCargoToJSON(value['cargo']),
        'fuel': ShipFuelToJSON(value['fuel']),
    };
}

