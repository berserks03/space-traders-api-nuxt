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
 * An event that represents damage or wear to a ship's reactor, frame, or engine, reducing the condition of the ship.
 * @export
 * @interface ShipConditionEvent
 */
export interface ShipConditionEvent {
    /**
     * 
     * @type {string}
     * @memberof ShipConditionEvent
     */
    symbol: ShipConditionEventSymbolEnum;
    /**
     * 
     * @type {string}
     * @memberof ShipConditionEvent
     */
    component: ShipConditionEventComponentEnum;
    /**
     * The name of the event.
     * @type {string}
     * @memberof ShipConditionEvent
     */
    name: string;
    /**
     * A description of the event.
     * @type {string}
     * @memberof ShipConditionEvent
     */
    description: string;
}


/**
 * @export
 */
export const ShipConditionEventSymbolEnum = {
    ReactorOverload: 'REACTOR_OVERLOAD',
    EnergySpikeFromMineral: 'ENERGY_SPIKE_FROM_MINERAL',
    SolarFlareInterference: 'SOLAR_FLARE_INTERFERENCE',
    CoolantLeak: 'COOLANT_LEAK',
    PowerDistributionFluctuation: 'POWER_DISTRIBUTION_FLUCTUATION',
    MagneticFieldDisruption: 'MAGNETIC_FIELD_DISRUPTION',
    HullMicrometeoriteStrikes: 'HULL_MICROMETEORITE_STRIKES',
    StructuralStressFractures: 'STRUCTURAL_STRESS_FRACTURES',
    CorrosiveMineralContamination: 'CORROSIVE_MINERAL_CONTAMINATION',
    ThermalExpansionMismatch: 'THERMAL_EXPANSION_MISMATCH',
    VibrationDamageFromDrilling: 'VIBRATION_DAMAGE_FROM_DRILLING',
    ElectromagneticFieldInterference: 'ELECTROMAGNETIC_FIELD_INTERFERENCE',
    ImpactWithExtractedDebris: 'IMPACT_WITH_EXTRACTED_DEBRIS',
    FuelEfficiencyDegradation: 'FUEL_EFFICIENCY_DEGRADATION',
    CoolantSystemAgeing: 'COOLANT_SYSTEM_AGEING',
    DustMicroabrasions: 'DUST_MICROABRASIONS',
    ThrusterNozzleWear: 'THRUSTER_NOZZLE_WEAR',
    ExhaustPortClogging: 'EXHAUST_PORT_CLOGGING',
    BearingLubricationFade: 'BEARING_LUBRICATION_FADE',
    SensorCalibrationDrift: 'SENSOR_CALIBRATION_DRIFT',
    HullMicrometeoriteDamage: 'HULL_MICROMETEORITE_DAMAGE',
    SpaceDebrisCollision: 'SPACE_DEBRIS_COLLISION',
    ThermalStress: 'THERMAL_STRESS',
    VibrationOverload: 'VIBRATION_OVERLOAD',
    PressureDifferentialStress: 'PRESSURE_DIFFERENTIAL_STRESS',
    ElectromagneticSurgeEffects: 'ELECTROMAGNETIC_SURGE_EFFECTS',
    AtmosphericEntryHeat: 'ATMOSPHERIC_ENTRY_HEAT'
} as const;
export type ShipConditionEventSymbolEnum = typeof ShipConditionEventSymbolEnum[keyof typeof ShipConditionEventSymbolEnum];

/**
 * @export
 */
export const ShipConditionEventComponentEnum = {
    Frame: 'FRAME',
    Reactor: 'REACTOR',
    Engine: 'ENGINE'
} as const;
export type ShipConditionEventComponentEnum = typeof ShipConditionEventComponentEnum[keyof typeof ShipConditionEventComponentEnum];


/**
 * Check if a given object implements the ShipConditionEvent interface.
 */
export function instanceOfShipConditionEvent(value: object): value is ShipConditionEvent {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('component' in value) || value['component'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function ShipConditionEventFromJSON(json: any): ShipConditionEvent {
    return ShipConditionEventFromJSONTyped(json, false);
}

export function ShipConditionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipConditionEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'component': json['component'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function ShipConditionEventToJSON(json: any): ShipConditionEvent {
    return ShipConditionEventToJSONTyped(json, false);
}

export function ShipConditionEventToJSONTyped(value?: ShipConditionEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'component': value['component'],
        'name': value['name'],
        'description': value['description'],
    };
}

