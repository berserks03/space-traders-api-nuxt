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
 * The chart of a system or waypoint, which makes the location visible to other agents.
 * @export
 * @interface Chart
 */
export interface Chart {
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof Chart
     */
    waypointSymbol?: string;
    /**
     * The agent that submitted the chart for this waypoint.
     * @type {string}
     * @memberof Chart
     */
    submittedBy?: string;
    /**
     * The time the chart for this waypoint was submitted.
     * @type {Date}
     * @memberof Chart
     */
    submittedOn?: Date;
}

/**
 * Check if a given object implements the Chart interface.
 */
export function instanceOfChart(value: object): value is Chart {
    return true;
}

export function ChartFromJSON(json: any): Chart {
    return ChartFromJSONTyped(json, false);
}

export function ChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): Chart {
    if (json == null) {
        return json;
    }
    return {
        
        'waypointSymbol': json['waypointSymbol'] == null ? undefined : json['waypointSymbol'],
        'submittedBy': json['submittedBy'] == null ? undefined : json['submittedBy'],
        'submittedOn': json['submittedOn'] == null ? undefined : (new Date(json['submittedOn'])),
    };
}

export function ChartToJSON(json: any): Chart {
    return ChartToJSONTyped(json, false);
}

export function ChartToJSONTyped(value?: Chart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'waypointSymbol': value['waypointSymbol'],
        'submittedBy': value['submittedBy'],
        'submittedOn': value['submittedOn'] == null ? undefined : ((value['submittedOn']).toISOString()),
    };
}

