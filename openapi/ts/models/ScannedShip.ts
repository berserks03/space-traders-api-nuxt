/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * OpenAPI spec version: 2.3.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ScannedShipEngine } from '../models/ScannedShipEngine';
import { ScannedShipFrame } from '../models/ScannedShipFrame';
import { ScannedShipMountsInner } from '../models/ScannedShipMountsInner';
import { ScannedShipReactor } from '../models/ScannedShipReactor';
import { ShipNav } from '../models/ShipNav';
import { ShipRegistration } from '../models/ShipRegistration';
import { HttpFile } from '../http/http';

/**
* The ship that was scanned. Details include information about the ship that could be detected by the scanner.
*/
export class ScannedShip {
    /**
    * The globally unique identifier of the ship.
    */
    'symbol': string;
    'registration': ShipRegistration;
    'nav': ShipNav;
    'frame'?: ScannedShipFrame;
    'reactor'?: ScannedShipReactor;
    'engine': ScannedShipEngine;
    /**
    * List of mounts installed in the ship.
    */
    'mounts'?: Array<ScannedShipMountsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "registration",
            "baseName": "registration",
            "type": "ShipRegistration",
            "format": ""
        },
        {
            "name": "nav",
            "baseName": "nav",
            "type": "ShipNav",
            "format": ""
        },
        {
            "name": "frame",
            "baseName": "frame",
            "type": "ScannedShipFrame",
            "format": ""
        },
        {
            "name": "reactor",
            "baseName": "reactor",
            "type": "ScannedShipReactor",
            "format": ""
        },
        {
            "name": "engine",
            "baseName": "engine",
            "type": "ScannedShipEngine",
            "format": ""
        },
        {
            "name": "mounts",
            "baseName": "mounts",
            "type": "Array<ScannedShipMountsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScannedShip.attributeTypeMap;
    }

    public constructor() {
    }
}
