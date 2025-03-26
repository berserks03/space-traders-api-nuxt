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

import { Agent } from '../models/Agent';
import { RepairTransaction } from '../models/RepairTransaction';
import { Ship } from '../models/Ship';
import { HttpFile } from '../http/http';

export class RepairShip200ResponseData {
    'agent': Agent;
    'ship': Ship;
    'transaction': RepairTransaction;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agent",
            "baseName": "agent",
            "type": "Agent",
            "format": ""
        },
        {
            "name": "ship",
            "baseName": "ship",
            "type": "Ship",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "RepairTransaction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RepairShip200ResponseData.attributeTypeMap;
    }

    public constructor() {
    }
}
