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
/**
 * 
 * @export
 * @interface GetStatus200ResponseLeaderboardsMostCreditsInner
 */
export interface GetStatus200ResponseLeaderboardsMostCreditsInner {
    /**
     * Symbol of the agent.
     * @type {string}
     * @memberof GetStatus200ResponseLeaderboardsMostCreditsInner
     */
    agentSymbol: string;
    /**
     * Amount of credits.
     * @type {number}
     * @memberof GetStatus200ResponseLeaderboardsMostCreditsInner
     */
    credits: number;
}

/**
 * Check if a given object implements the GetStatus200ResponseLeaderboardsMostCreditsInner interface.
 */
export function instanceOfGetStatus200ResponseLeaderboardsMostCreditsInner(value: object): value is GetStatus200ResponseLeaderboardsMostCreditsInner {
    if (!('agentSymbol' in value) || value['agentSymbol'] === undefined) return false;
    if (!('credits' in value) || value['credits'] === undefined) return false;
    return true;
}

export function GetStatus200ResponseLeaderboardsMostCreditsInnerFromJSON(json: any): GetStatus200ResponseLeaderboardsMostCreditsInner {
    return GetStatus200ResponseLeaderboardsMostCreditsInnerFromJSONTyped(json, false);
}

export function GetStatus200ResponseLeaderboardsMostCreditsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStatus200ResponseLeaderboardsMostCreditsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'agentSymbol': json['agentSymbol'],
        'credits': json['credits'],
    };
}

export function GetStatus200ResponseLeaderboardsMostCreditsInnerToJSON(json: any): GetStatus200ResponseLeaderboardsMostCreditsInner {
    return GetStatus200ResponseLeaderboardsMostCreditsInnerToJSONTyped(json, false);
}

export function GetStatus200ResponseLeaderboardsMostCreditsInnerToJSONTyped(value?: GetStatus200ResponseLeaderboardsMostCreditsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'agentSymbol': value['agentSymbol'],
        'credits': value['credits'],
    };
}

