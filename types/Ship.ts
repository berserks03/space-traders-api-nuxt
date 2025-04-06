import type { components } from '~/openapi/spacetraders/spacetraders';

export type Ship = components['schemas']['Ship'];

export type ShipType = components['schemas']['ShipType'];

export type TradeSymbol = components['schemas']['TradeSymbol'];

export type RefineTradeSymbol = Extract<
    TradeSymbol,
    | 'IRON'
    | 'COPPER'
    | 'ALUMINUM'
    | 'SILVER'
    | 'GOLD'
    | 'PLATINUM'
    | 'URANITE'
    | 'MERITIUM'
    | 'FUEL'
>;

export type Survey = components['schemas']['Survey'];

export type NavMode = components['schemas']['ShipNavFlightMode'];

export type ShipMountSymbol = components['schemas']['ShipMount']['symbol'];

export type ShipModuleSymbol = components['schemas']['ShipModule']['symbol'];
