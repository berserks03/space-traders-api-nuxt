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
import type { SurveyDeposit } from './SurveyDeposit';
import {
    SurveyDepositFromJSON,
    SurveyDepositFromJSONTyped,
    SurveyDepositToJSON,
    SurveyDepositToJSONTyped,
} from './SurveyDeposit';

/**
 * A resource survey of a waypoint, detailing a specific extraction location and the types of resources that can be found there.
 * @export
 * @interface Survey
 */
export interface Survey {
    /**
     * A unique signature for the location of this survey. This signature is verified when attempting an extraction using this survey.
     * @type {string}
     * @memberof Survey
     */
    signature: string;
    /**
     * The symbol of the waypoint that this survey is for.
     * @type {string}
     * @memberof Survey
     */
    symbol: string;
    /**
     * A list of deposits that can be found at this location. A ship will extract one of these deposits when using this survey in an extraction request. If multiple deposits of the same type are present, the chance of extracting that deposit is increased.
     * @type {Array<SurveyDeposit>}
     * @memberof Survey
     */
    deposits: Array<SurveyDeposit>;
    /**
     * The date and time when the survey expires. After this date and time, the survey will no longer be available for extraction.
     * @type {Date}
     * @memberof Survey
     */
    expiration: Date;
    /**
     * The size of the deposit. This value indicates how much can be extracted from the survey before it is exhausted.
     * @type {string}
     * @memberof Survey
     */
    size: SurveySizeEnum;
}


/**
 * @export
 */
export const SurveySizeEnum = {
    Small: 'SMALL',
    Moderate: 'MODERATE',
    Large: 'LARGE'
} as const;
export type SurveySizeEnum = typeof SurveySizeEnum[keyof typeof SurveySizeEnum];


/**
 * Check if a given object implements the Survey interface.
 */
export function instanceOfSurvey(value: object): value is Survey {
    if (!('signature' in value) || value['signature'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('deposits' in value) || value['deposits'] === undefined) return false;
    if (!('expiration' in value) || value['expiration'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    return true;
}

export function SurveyFromJSON(json: any): Survey {
    return SurveyFromJSONTyped(json, false);
}

export function SurveyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Survey {
    if (json == null) {
        return json;
    }
    return {
        
        'signature': json['signature'],
        'symbol': json['symbol'],
        'deposits': ((json['deposits'] as Array<any>).map(SurveyDepositFromJSON)),
        'expiration': (new Date(json['expiration'])),
        'size': json['size'],
    };
}

export function SurveyToJSON(json: any): Survey {
    return SurveyToJSONTyped(json, false);
}

export function SurveyToJSONTyped(value?: Survey | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'signature': value['signature'],
        'symbol': value['symbol'],
        'deposits': ((value['deposits'] as Array<any>).map(SurveyDepositToJSON)),
        'expiration': ((value['expiration']).toISOString()),
        'size': value['size'],
    };
}

