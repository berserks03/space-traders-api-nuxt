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
import type { Contract } from './Contract';
import {
    ContractFromJSON,
    ContractFromJSONTyped,
    ContractToJSON,
    ContractToJSONTyped,
} from './Contract';

/**
 * 
 * @export
 * @interface NegotiateContract200ResponseData
 */
export interface NegotiateContract200ResponseData {
    /**
     * 
     * @type {Contract}
     * @memberof NegotiateContract200ResponseData
     */
    contract: Contract;
}

/**
 * Check if a given object implements the NegotiateContract200ResponseData interface.
 */
export function instanceOfNegotiateContract200ResponseData(value: object): value is NegotiateContract200ResponseData {
    if (!('contract' in value) || value['contract'] === undefined) return false;
    return true;
}

export function NegotiateContract200ResponseDataFromJSON(json: any): NegotiateContract200ResponseData {
    return NegotiateContract200ResponseDataFromJSONTyped(json, false);
}

export function NegotiateContract200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegotiateContract200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'contract': ContractFromJSON(json['contract']),
    };
}

export function NegotiateContract200ResponseDataToJSON(json: any): NegotiateContract200ResponseData {
    return NegotiateContract200ResponseDataToJSONTyped(json, false);
}

export function NegotiateContract200ResponseDataToJSONTyped(value?: NegotiateContract200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'contract': ContractToJSON(value['contract']),
    };
}

