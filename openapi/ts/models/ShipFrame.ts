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

import { ShipRequirements } from '../models/ShipRequirements';
import { HttpFile } from '../http/http';

/**
* The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable.
*/
export class ShipFrame {
    /**
    * Symbol of the frame.
    */
    'symbol': ShipFrameSymbolEnum;
    /**
    * Name of the frame.
    */
    'name': string;
    /**
    * Description of the frame.
    */
    'description': string;
    /**
    * The repairable condition of a component. A value of 0 indicates the component needs significant repairs, while a value of 1 indicates the component is in near perfect condition. As the condition of a component is repaired, the overall integrity of the component decreases.
    */
    'condition': number;
    /**
    * The overall integrity of the component, which determines the performance of the component. A value of 0 indicates that the component is almost completely degraded, while a value of 1 indicates that the component is in near perfect condition. The integrity of the component is non-repairable, and represents permanent wear over time.
    */
    'integrity': number;
    /**
    * The amount of slots that can be dedicated to modules installed in the ship. Each installed module take up a number of slots, and once there are no more slots, no new modules can be installed.
    */
    'moduleSlots': number;
    /**
    * The amount of slots that can be dedicated to mounts installed in the ship. Each installed mount takes up a number of points, and once there are no more points remaining, no new mounts can be installed.
    */
    'mountingPoints': number;
    /**
    * The maximum amount of fuel that can be stored in this ship. When refueling, the ship will be refueled to this amount.
    */
    'fuelCapacity': number;
    'requirements': ShipRequirements;
    /**
    * The overall quality of the component, which determines the quality of the component. High quality components return more ships parts and ship plating when a ship is scrapped. But also require more of these parts to repair. This is transparent to the player, as the parts are bought from/sold to the marketplace.
    */
    'quality': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "ShipFrameSymbolEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "condition",
            "baseName": "condition",
            "type": "number",
            "format": "double"
        },
        {
            "name": "integrity",
            "baseName": "integrity",
            "type": "number",
            "format": "double"
        },
        {
            "name": "moduleSlots",
            "baseName": "moduleSlots",
            "type": "number",
            "format": ""
        },
        {
            "name": "mountingPoints",
            "baseName": "mountingPoints",
            "type": "number",
            "format": ""
        },
        {
            "name": "fuelCapacity",
            "baseName": "fuelCapacity",
            "type": "number",
            "format": ""
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "ShipRequirements",
            "format": ""
        },
        {
            "name": "quality",
            "baseName": "quality",
            "type": "number",
            "format": "integer"
        }    ];

    static getAttributeTypeMap() {
        return ShipFrame.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ShipFrameSymbolEnum {
    FrameProbe = 'FRAME_PROBE',
    FrameDrone = 'FRAME_DRONE',
    FrameInterceptor = 'FRAME_INTERCEPTOR',
    FrameRacer = 'FRAME_RACER',
    FrameFighter = 'FRAME_FIGHTER',
    FrameFrigate = 'FRAME_FRIGATE',
    FrameShuttle = 'FRAME_SHUTTLE',
    FrameExplorer = 'FRAME_EXPLORER',
    FrameMiner = 'FRAME_MINER',
    FrameLightFreighter = 'FRAME_LIGHT_FREIGHTER',
    FrameHeavyFreighter = 'FRAME_HEAVY_FREIGHTER',
    FrameTransport = 'FRAME_TRANSPORT',
    FrameDestroyer = 'FRAME_DESTROYER',
    FrameCruiser = 'FRAME_CRUISER',
    FrameCarrier = 'FRAME_CARRIER'
}

