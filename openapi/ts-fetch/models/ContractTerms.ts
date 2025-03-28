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
import type { ContractPayment } from './ContractPayment';
import {
    ContractPaymentFromJSON,
    ContractPaymentFromJSONTyped,
    ContractPaymentToJSON,
    ContractPaymentToJSONTyped,
} from './ContractPayment';
import type { ContractDeliverGood } from './ContractDeliverGood';
import {
    ContractDeliverGoodFromJSON,
    ContractDeliverGoodFromJSONTyped,
    ContractDeliverGoodToJSON,
    ContractDeliverGoodToJSONTyped,
} from './ContractDeliverGood';

/**
 * The terms to fulfill the contract.
 * @export
 * @interface ContractTerms
 */
export interface ContractTerms {
    /**
     * The deadline for the contract.
     * @type {Date}
     * @memberof ContractTerms
     */
    deadline: Date;
    /**
     * 
     * @type {ContractPayment}
     * @memberof ContractTerms
     */
    payment: ContractPayment;
    /**
     * The cargo that needs to be delivered to fulfill the contract.
     * @type {Array<ContractDeliverGood>}
     * @memberof ContractTerms
     */
    deliver?: Array<ContractDeliverGood>;
}

/**
 * Check if a given object implements the ContractTerms interface.
 */
export function instanceOfContractTerms(value: object): value is ContractTerms {
    if (!('deadline' in value) || value['deadline'] === undefined) return false;
    if (!('payment' in value) || value['payment'] === undefined) return false;
    return true;
}

export function ContractTermsFromJSON(json: any): ContractTerms {
    return ContractTermsFromJSONTyped(json, false);
}

export function ContractTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'deadline': (new Date(json['deadline'])),
        'payment': ContractPaymentFromJSON(json['payment']),
        'deliver': json['deliver'] == null ? undefined : ((json['deliver'] as Array<any>).map(ContractDeliverGoodFromJSON)),
    };
}

export function ContractTermsToJSON(json: any): ContractTerms {
    return ContractTermsToJSONTyped(json, false);
}

export function ContractTermsToJSONTyped(value?: ContractTerms | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'deadline': ((value['deadline']).toISOString()),
        'payment': ContractPaymentToJSON(value['payment']),
        'deliver': value['deliver'] == null ? undefined : ((value['deliver'] as Array<any>).map(ContractDeliverGoodToJSON)),
    };
}

