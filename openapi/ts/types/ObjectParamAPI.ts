import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { AcceptContract200Response } from '../models/AcceptContract200Response';
import { AcceptContract200ResponseData } from '../models/AcceptContract200ResponseData';
import { ActivityLevel } from '../models/ActivityLevel';
import { Agent } from '../models/Agent';
import { Chart } from '../models/Chart';
import { Construction } from '../models/Construction';
import { ConstructionMaterial } from '../models/ConstructionMaterial';
import { Contract } from '../models/Contract';
import { ContractDeliverGood } from '../models/ContractDeliverGood';
import { ContractPayment } from '../models/ContractPayment';
import { ContractTerms } from '../models/ContractTerms';
import { Cooldown } from '../models/Cooldown';
import { CreateChart201Response } from '../models/CreateChart201Response';
import { CreateChart201ResponseData } from '../models/CreateChart201ResponseData';
import { CreateShipShipScan201Response } from '../models/CreateShipShipScan201Response';
import { CreateShipShipScan201ResponseData } from '../models/CreateShipShipScan201ResponseData';
import { CreateShipSystemScan201Response } from '../models/CreateShipSystemScan201Response';
import { CreateShipSystemScan201ResponseData } from '../models/CreateShipSystemScan201ResponseData';
import { CreateShipWaypointScan201Response } from '../models/CreateShipWaypointScan201Response';
import { CreateShipWaypointScan201ResponseData } from '../models/CreateShipWaypointScan201ResponseData';
import { CreateSurvey201Response } from '../models/CreateSurvey201Response';
import { CreateSurvey201ResponseData } from '../models/CreateSurvey201ResponseData';
import { DeliverContract200Response } from '../models/DeliverContract200Response';
import { DeliverContract200ResponseData } from '../models/DeliverContract200ResponseData';
import { DeliverContractRequest } from '../models/DeliverContractRequest';
import { DockShip200Response } from '../models/DockShip200Response';
import { ExtractResources201Response } from '../models/ExtractResources201Response';
import { ExtractResources201ResponseData } from '../models/ExtractResources201ResponseData';
import { ExtractResourcesRequest } from '../models/ExtractResourcesRequest';
import { Extraction } from '../models/Extraction';
import { ExtractionYield } from '../models/ExtractionYield';
import { Faction } from '../models/Faction';
import { FactionSymbol } from '../models/FactionSymbol';
import { FactionTrait } from '../models/FactionTrait';
import { FactionTraitSymbol } from '../models/FactionTraitSymbol';
import { FulfillContract200Response } from '../models/FulfillContract200Response';
import { GetAgents200Response } from '../models/GetAgents200Response';
import { GetConstruction200Response } from '../models/GetConstruction200Response';
import { GetContract200Response } from '../models/GetContract200Response';
import { GetContracts200Response } from '../models/GetContracts200Response';
import { GetFaction200Response } from '../models/GetFaction200Response';
import { GetFactions200Response } from '../models/GetFactions200Response';
import { GetJumpGate200Response } from '../models/GetJumpGate200Response';
import { GetMarket200Response } from '../models/GetMarket200Response';
import { GetMounts200Response } from '../models/GetMounts200Response';
import { GetMyAgent200Response } from '../models/GetMyAgent200Response';
import { GetMyShip200Response } from '../models/GetMyShip200Response';
import { GetMyShipCargo200Response } from '../models/GetMyShipCargo200Response';
import { GetMyShips200Response } from '../models/GetMyShips200Response';
import { GetRepairShip200Response } from '../models/GetRepairShip200Response';
import { GetRepairShip200ResponseData } from '../models/GetRepairShip200ResponseData';
import { GetScrapShip200Response } from '../models/GetScrapShip200Response';
import { GetScrapShip200ResponseData } from '../models/GetScrapShip200ResponseData';
import { GetShipCooldown200Response } from '../models/GetShipCooldown200Response';
import { GetShipNav200Response } from '../models/GetShipNav200Response';
import { GetShipyard200Response } from '../models/GetShipyard200Response';
import { GetStatus200Response } from '../models/GetStatus200Response';
import { GetStatus200ResponseAnnouncementsInner } from '../models/GetStatus200ResponseAnnouncementsInner';
import { GetStatus200ResponseLeaderboards } from '../models/GetStatus200ResponseLeaderboards';
import { GetStatus200ResponseLeaderboardsMostCreditsInner } from '../models/GetStatus200ResponseLeaderboardsMostCreditsInner';
import { GetStatus200ResponseLeaderboardsMostSubmittedChartsInner } from '../models/GetStatus200ResponseLeaderboardsMostSubmittedChartsInner';
import { GetStatus200ResponseLinksInner } from '../models/GetStatus200ResponseLinksInner';
import { GetStatus200ResponseServerResets } from '../models/GetStatus200ResponseServerResets';
import { GetStatus200ResponseStats } from '../models/GetStatus200ResponseStats';
import { GetSystem200Response } from '../models/GetSystem200Response';
import { GetSystemWaypoints200Response } from '../models/GetSystemWaypoints200Response';
import { GetSystemWaypointsTraitsParameter } from '../models/GetSystemWaypointsTraitsParameter';
import { GetSystems200Response } from '../models/GetSystems200Response';
import { GetWaypoint200Response } from '../models/GetWaypoint200Response';
import { InstallMount201Response } from '../models/InstallMount201Response';
import { InstallMount201ResponseData } from '../models/InstallMount201ResponseData';
import { InstallMountRequest } from '../models/InstallMountRequest';
import { Jettison200Response } from '../models/Jettison200Response';
import { Jettison200ResponseData } from '../models/Jettison200ResponseData';
import { JettisonRequest } from '../models/JettisonRequest';
import { JumpGate } from '../models/JumpGate';
import { JumpShip200Response } from '../models/JumpShip200Response';
import { JumpShip200ResponseData } from '../models/JumpShip200ResponseData';
import { JumpShipRequest } from '../models/JumpShipRequest';
import { Market } from '../models/Market';
import { MarketTradeGood } from '../models/MarketTradeGood';
import { MarketTransaction } from '../models/MarketTransaction';
import { Meta } from '../models/Meta';
import { NavigateShip200Response } from '../models/NavigateShip200Response';
import { NavigateShip200ResponseData } from '../models/NavigateShip200ResponseData';
import { NavigateShip200ResponseDataEventsInner } from '../models/NavigateShip200ResponseDataEventsInner';
import { NavigateShipRequest } from '../models/NavigateShipRequest';
import { NegotiateContract200Response } from '../models/NegotiateContract200Response';
import { NegotiateContract200ResponseData } from '../models/NegotiateContract200ResponseData';
import { OrbitShip200Response } from '../models/OrbitShip200Response';
import { OrbitShip200ResponseData } from '../models/OrbitShip200ResponseData';
import { PatchShipNavRequest } from '../models/PatchShipNavRequest';
import { PurchaseCargo201Response } from '../models/PurchaseCargo201Response';
import { PurchaseCargoRequest } from '../models/PurchaseCargoRequest';
import { PurchaseShip201Response } from '../models/PurchaseShip201Response';
import { PurchaseShip201ResponseData } from '../models/PurchaseShip201ResponseData';
import { PurchaseShipRequest } from '../models/PurchaseShipRequest';
import { RefuelShip200Response } from '../models/RefuelShip200Response';
import { RefuelShip200ResponseData } from '../models/RefuelShip200ResponseData';
import { RefuelShipRequest } from '../models/RefuelShipRequest';
import { Register201Response } from '../models/Register201Response';
import { Register201ResponseData } from '../models/Register201ResponseData';
import { RegisterRequest } from '../models/RegisterRequest';
import { RemoveMount201Response } from '../models/RemoveMount201Response';
import { RemoveMount201ResponseData } from '../models/RemoveMount201ResponseData';
import { RemoveMountRequest } from '../models/RemoveMountRequest';
import { RepairShip200Response } from '../models/RepairShip200Response';
import { RepairShip200ResponseData } from '../models/RepairShip200ResponseData';
import { RepairTransaction } from '../models/RepairTransaction';
import { ScannedShip } from '../models/ScannedShip';
import { ScannedShipEngine } from '../models/ScannedShipEngine';
import { ScannedShipFrame } from '../models/ScannedShipFrame';
import { ScannedShipMountsInner } from '../models/ScannedShipMountsInner';
import { ScannedShipReactor } from '../models/ScannedShipReactor';
import { ScannedSystem } from '../models/ScannedSystem';
import { ScannedWaypoint } from '../models/ScannedWaypoint';
import { ScrapShip200Response } from '../models/ScrapShip200Response';
import { ScrapShip200ResponseData } from '../models/ScrapShip200ResponseData';
import { ScrapTransaction } from '../models/ScrapTransaction';
import { SellCargo201Response } from '../models/SellCargo201Response';
import { SellCargo201ResponseData } from '../models/SellCargo201ResponseData';
import { SellCargoRequest } from '../models/SellCargoRequest';
import { Ship } from '../models/Ship';
import { ShipCargo } from '../models/ShipCargo';
import { ShipCargoItem } from '../models/ShipCargoItem';
import { ShipConditionEvent } from '../models/ShipConditionEvent';
import { ShipCrew } from '../models/ShipCrew';
import { ShipEngine } from '../models/ShipEngine';
import { ShipFrame } from '../models/ShipFrame';
import { ShipFuel } from '../models/ShipFuel';
import { ShipFuelConsumed } from '../models/ShipFuelConsumed';
import { ShipModificationTransaction } from '../models/ShipModificationTransaction';
import { ShipModule } from '../models/ShipModule';
import { ShipMount } from '../models/ShipMount';
import { ShipNav } from '../models/ShipNav';
import { ShipNavFlightMode } from '../models/ShipNavFlightMode';
import { ShipNavRoute } from '../models/ShipNavRoute';
import { ShipNavRouteWaypoint } from '../models/ShipNavRouteWaypoint';
import { ShipNavStatus } from '../models/ShipNavStatus';
import { ShipReactor } from '../models/ShipReactor';
import { ShipRefine201Response } from '../models/ShipRefine201Response';
import { ShipRefine201ResponseData } from '../models/ShipRefine201ResponseData';
import { ShipRefine201ResponseDataProducedInner } from '../models/ShipRefine201ResponseDataProducedInner';
import { ShipRefineRequest } from '../models/ShipRefineRequest';
import { ShipRegistration } from '../models/ShipRegistration';
import { ShipRequirements } from '../models/ShipRequirements';
import { ShipRole } from '../models/ShipRole';
import { ShipType } from '../models/ShipType';
import { Shipyard } from '../models/Shipyard';
import { ShipyardShip } from '../models/ShipyardShip';
import { ShipyardShipCrew } from '../models/ShipyardShipCrew';
import { ShipyardShipTypesInner } from '../models/ShipyardShipTypesInner';
import { ShipyardTransaction } from '../models/ShipyardTransaction';
import { Siphon } from '../models/Siphon';
import { SiphonResources201Response } from '../models/SiphonResources201Response';
import { SiphonResources201ResponseData } from '../models/SiphonResources201ResponseData';
import { SiphonYield } from '../models/SiphonYield';
import { SupplyConstruction201Response } from '../models/SupplyConstruction201Response';
import { SupplyConstruction201ResponseData } from '../models/SupplyConstruction201ResponseData';
import { SupplyConstructionRequest } from '../models/SupplyConstructionRequest';
import { SupplyLevel } from '../models/SupplyLevel';
import { Survey } from '../models/Survey';
import { SurveyDeposit } from '../models/SurveyDeposit';
import { System } from '../models/System';
import { SystemFaction } from '../models/SystemFaction';
import { SystemType } from '../models/SystemType';
import { SystemWaypoint } from '../models/SystemWaypoint';
import { TradeGood } from '../models/TradeGood';
import { TradeSymbol } from '../models/TradeSymbol';
import { TransferCargo200Response } from '../models/TransferCargo200Response';
import { TransferCargoRequest } from '../models/TransferCargoRequest';
import { WarpShip200Response } from '../models/WarpShip200Response';
import { WarpShip200ResponseData } from '../models/WarpShip200ResponseData';
import { Waypoint } from '../models/Waypoint';
import { WaypointFaction } from '../models/WaypointFaction';
import { WaypointModifier } from '../models/WaypointModifier';
import { WaypointModifierSymbol } from '../models/WaypointModifierSymbol';
import { WaypointOrbital } from '../models/WaypointOrbital';
import { WaypointTrait } from '../models/WaypointTrait';
import { WaypointTraitSymbol } from '../models/WaypointTraitSymbol';
import { WaypointType } from '../models/WaypointType';

import { ObservableAgentsApi } from "./ObservableAPI";
import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";

export interface AgentsApiGetAgentRequest {
    /**
     * The agent symbol
     * Defaults to: &#39;FEBA66&#39;
     * @type string
     * @memberof AgentsApigetAgent
     */
    agentSymbol: string
}

export interface AgentsApiGetAgentsRequest {
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof AgentsApigetAgents
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof AgentsApigetAgents
     */
    limit?: number
}

export interface AgentsApiGetMyAgentRequest {
}

export class ObjectAgentsApi {
    private api: ObservableAgentsApi

    public constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param param the request object
     */
    public getAgentWithHttpInfo(param: AgentsApiGetAgentRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMyAgent200Response>> {
        return this.api.getAgentWithHttpInfo(param.agentSymbol,  options).toPromise();
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param param the request object
     */
    public getAgent(param: AgentsApiGetAgentRequest, options?: ConfigurationOptions): Promise<GetMyAgent200Response> {
        return this.api.getAgent(param.agentSymbol,  options).toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param param the request object
     */
    public getAgentsWithHttpInfo(param: AgentsApiGetAgentsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetAgents200Response>> {
        return this.api.getAgentsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param param the request object
     */
    public getAgents(param: AgentsApiGetAgentsRequest = {}, options?: ConfigurationOptions): Promise<GetAgents200Response> {
        return this.api.getAgents(param.page, param.limit,  options).toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     * @param param the request object
     */
    public getMyAgentWithHttpInfo(param: AgentsApiGetMyAgentRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetMyAgent200Response>> {
        return this.api.getMyAgentWithHttpInfo( options).toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     * @param param the request object
     */
    public getMyAgent(param: AgentsApiGetMyAgentRequest = {}, options?: ConfigurationOptions): Promise<GetMyAgent200Response> {
        return this.api.getMyAgent( options).toPromise();
    }

}

import { ObservableContractsApi } from "./ObservableAPI";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";

export interface ContractsApiAcceptContractRequest {
    /**
     * The contract ID to accept.
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApiacceptContract
     */
    contractId: string
}

export interface ContractsApiDeliverContractRequest {
    /**
     * The ID of the contract.
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApideliverContract
     */
    contractId: string
    /**
     * 
     * @type DeliverContractRequest
     * @memberof ContractsApideliverContract
     */
    deliverContractRequest?: DeliverContractRequest
}

export interface ContractsApiFulfillContractRequest {
    /**
     * The ID of the contract to fulfill.
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApifulfillContract
     */
    contractId: string
}

export interface ContractsApiGetContractRequest {
    /**
     * The contract ID
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApigetContract
     */
    contractId: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof ContractsApigetContracts
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof ContractsApigetContracts
     */
    limit?: number
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param param the request object
     */
    public acceptContractWithHttpInfo(param: ContractsApiAcceptContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<AcceptContract200Response>> {
        return this.api.acceptContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param param the request object
     */
    public acceptContract(param: ContractsApiAcceptContractRequest, options?: ConfigurationOptions): Promise<AcceptContract200Response> {
        return this.api.acceptContract(param.contractId,  options).toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param param the request object
     */
    public deliverContractWithHttpInfo(param: ContractsApiDeliverContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeliverContract200Response>> {
        return this.api.deliverContractWithHttpInfo(param.contractId, param.deliverContractRequest,  options).toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param param the request object
     */
    public deliverContract(param: ContractsApiDeliverContractRequest, options?: ConfigurationOptions): Promise<DeliverContract200Response> {
        return this.api.deliverContract(param.contractId, param.deliverContractRequest,  options).toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param param the request object
     */
    public fulfillContractWithHttpInfo(param: ContractsApiFulfillContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<FulfillContract200Response>> {
        return this.api.fulfillContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param param the request object
     */
    public fulfillContract(param: ContractsApiFulfillContractRequest, options?: ConfigurationOptions): Promise<FulfillContract200Response> {
        return this.api.fulfillContract(param.contractId,  options).toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param param the request object
     */
    public getContractWithHttpInfo(param: ContractsApiGetContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetContract200Response>> {
        return this.api.getContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: ConfigurationOptions): Promise<GetContract200Response> {
        return this.api.getContract(param.contractId,  options).toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param param the request object
     */
    public getContractsWithHttpInfo(param: ContractsApiGetContractsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetContracts200Response>> {
        return this.api.getContractsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: ConfigurationOptions): Promise<GetContracts200Response> {
        return this.api.getContracts(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableDataApi } from "./ObservableAPI";
import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";

export interface DataApiGetSupplyChainRequest {
}

export class ObjectDataApi {
    private api: ObservableDataApi

    public constructor(configuration: Configuration, requestFactory?: DataApiRequestFactory, responseProcessor?: DataApiResponseProcessor) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Describes which import and exports map to each other.
     * Get Supply Chain
     * @param param the request object
     */
    public getSupplyChainWithHttpInfo(param: DataApiGetSupplyChainRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.getSupplyChainWithHttpInfo( options).toPromise();
    }

    /**
     * Describes which import and exports map to each other.
     * Get Supply Chain
     * @param param the request object
     */
    public getSupplyChain(param: DataApiGetSupplyChainRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.getSupplyChain( options).toPromise();
    }

}

import { ObservableFactionsApi } from "./ObservableAPI";
import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi";

export interface FactionsApiGetFactionRequest {
    /**
     * The faction symbol
     * Defaults to: undefined
     * @type string
     * @memberof FactionsApigetFaction
     */
    factionSymbol: string
}

export interface FactionsApiGetFactionsRequest {
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof FactionsApigetFactions
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof FactionsApigetFactions
     */
    limit?: number
}

export class ObjectFactionsApi {
    private api: ObservableFactionsApi

    public constructor(configuration: Configuration, requestFactory?: FactionsApiRequestFactory, responseProcessor?: FactionsApiResponseProcessor) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param param the request object
     */
    public getFactionWithHttpInfo(param: FactionsApiGetFactionRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetFaction200Response>> {
        return this.api.getFactionWithHttpInfo(param.factionSymbol,  options).toPromise();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param param the request object
     */
    public getFaction(param: FactionsApiGetFactionRequest, options?: ConfigurationOptions): Promise<GetFaction200Response> {
        return this.api.getFaction(param.factionSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param param the request object
     */
    public getFactionsWithHttpInfo(param: FactionsApiGetFactionsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetFactions200Response>> {
        return this.api.getFactionsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param param the request object
     */
    public getFactions(param: FactionsApiGetFactionsRequest = {}, options?: ConfigurationOptions): Promise<GetFactions200Response> {
        return this.api.getFactions(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableFleetApi } from "./ObservableAPI";
import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi";

export interface FleetApiCreateChartRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApicreateChart
     */
    shipSymbol: string
}

export interface FleetApiCreateShipShipScanRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApicreateShipShipScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipSystemScanRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApicreateShipSystemScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipWaypointScanRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApicreateShipWaypointScan
     */
    shipSymbol: string
}

export interface FleetApiCreateSurveyRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApicreateSurvey
     */
    shipSymbol: string
}

export interface FleetApiDockShipRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApidockShip
     */
    shipSymbol: string
}

export interface FleetApiExtractResourcesRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiextractResources
     */
    shipSymbol: string
    /**
     * 
     * @type ExtractResourcesRequest
     * @memberof FleetApiextractResources
     */
    extractResourcesRequest?: ExtractResourcesRequest
}

export interface FleetApiExtractResourcesWithSurveyRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiextractResourcesWithSurvey
     */
    shipSymbol: string
    /**
     * 
     * @type Survey
     * @memberof FleetApiextractResourcesWithSurvey
     */
    survey?: Survey
}

export interface FleetApiGetMountsRequest {
    /**
     * The ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetMounts
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetMyShip
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipCargoRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetMyShipCargo
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipsRequest {
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof FleetApigetMyShips
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof FleetApigetMyShips
     */
    limit?: number
}

export interface FleetApiGetRepairShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetRepairShip
     */
    shipSymbol: string
}

export interface FleetApiGetScrapShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetScrapShip
     */
    shipSymbol: string
}

export interface FleetApiGetShipCooldownRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetShipCooldown
     */
    shipSymbol: string
}

export interface FleetApiGetShipNavRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApigetShipNav
     */
    shipSymbol: string
}

export interface FleetApiInstallMountRequest {
    /**
     * The ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiinstallMount
     */
    shipSymbol: string
    /**
     * 
     * @type InstallMountRequest
     * @memberof FleetApiinstallMount
     */
    installMountRequest?: InstallMountRequest
}

export interface FleetApiJettisonRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApijettison
     */
    shipSymbol: string
    /**
     * 
     * @type JettisonRequest
     * @memberof FleetApijettison
     */
    jettisonRequest?: JettisonRequest
}

export interface FleetApiJumpShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApijumpShip
     */
    shipSymbol: string
    /**
     * 
     * @type JumpShipRequest
     * @memberof FleetApijumpShip
     */
    jumpShipRequest?: JumpShipRequest
}

export interface FleetApiNavigateShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApinavigateShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApinavigateShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export interface FleetApiNegotiateContractRequest {
    /**
     * The ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApinegotiateContract
     */
    shipSymbol: string
}

export interface FleetApiOrbitShipRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiorbitShip
     */
    shipSymbol: string
}

export interface FleetApiPatchShipNavRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApipatchShipNav
     */
    shipSymbol: string
    /**
     * 
     * @type PatchShipNavRequest
     * @memberof FleetApipatchShipNav
     */
    patchShipNavRequest?: PatchShipNavRequest
}

export interface FleetApiPurchaseCargoRequest {
    /**
     * The ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApipurchaseCargo
     */
    shipSymbol: string
    /**
     * 
     * @type PurchaseCargoRequest
     * @memberof FleetApipurchaseCargo
     */
    purchaseCargoRequest?: PurchaseCargoRequest
}

export interface FleetApiPurchaseShipRequest {
    /**
     * 
     * @type PurchaseShipRequest
     * @memberof FleetApipurchaseShip
     */
    purchaseShipRequest?: PurchaseShipRequest
}

export interface FleetApiRefuelShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApirefuelShip
     */
    shipSymbol: string
    /**
     * 
     * @type RefuelShipRequest
     * @memberof FleetApirefuelShip
     */
    refuelShipRequest?: RefuelShipRequest
}

export interface FleetApiRemoveMountRequest {
    /**
     * The ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiremoveMount
     */
    shipSymbol: string
    /**
     * 
     * @type RemoveMountRequest
     * @memberof FleetApiremoveMount
     */
    removeMountRequest?: RemoveMountRequest
}

export interface FleetApiRepairShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApirepairShip
     */
    shipSymbol: string
}

export interface FleetApiScrapShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiscrapShip
     */
    shipSymbol: string
}

export interface FleetApiSellCargoRequest {
    /**
     * Symbol of a ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApisellCargo
     */
    shipSymbol: string
    /**
     * 
     * @type SellCargoRequest
     * @memberof FleetApisellCargo
     */
    sellCargoRequest?: SellCargoRequest
}

export interface FleetApiShipRefineRequest {
    /**
     * The symbol of the ship.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApishipRefine
     */
    shipSymbol: string
    /**
     * 
     * @type ShipRefineRequest
     * @memberof FleetApishipRefine
     */
    shipRefineRequest?: ShipRefineRequest
}

export interface FleetApiSiphonResourcesRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApisiphonResources
     */
    shipSymbol: string
}

export interface FleetApiTransferCargoRequest {
    /**
     * The transferring ship\&#39;s symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApitransferCargo
     */
    shipSymbol: string
    /**
     * 
     * @type TransferCargoRequest
     * @memberof FleetApitransferCargo
     */
    transferCargoRequest?: TransferCargoRequest
}

export interface FleetApiWarpShipRequest {
    /**
     * The ship symbol.
     * Defaults to: undefined
     * @type string
     * @memberof FleetApiwarpShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApiwarpShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export class ObjectFleetApi {
    private api: ObservableFleetApi

    public constructor(configuration: Configuration, requestFactory?: FleetApiRequestFactory, responseProcessor?: FleetApiResponseProcessor) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param param the request object
     */
    public createChartWithHttpInfo(param: FleetApiCreateChartRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateChart201Response>> {
        return this.api.createChartWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param param the request object
     */
    public createChart(param: FleetApiCreateChartRequest, options?: ConfigurationOptions): Promise<CreateChart201Response> {
        return this.api.createChart(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param param the request object
     */
    public createShipShipScanWithHttpInfo(param: FleetApiCreateShipShipScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateShipShipScan201Response>> {
        return this.api.createShipShipScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param param the request object
     */
    public createShipShipScan(param: FleetApiCreateShipShipScanRequest, options?: ConfigurationOptions): Promise<CreateShipShipScan201Response> {
        return this.api.createShipShipScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param param the request object
     */
    public createShipSystemScanWithHttpInfo(param: FleetApiCreateShipSystemScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateShipSystemScan201Response>> {
        return this.api.createShipSystemScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param param the request object
     */
    public createShipSystemScan(param: FleetApiCreateShipSystemScanRequest, options?: ConfigurationOptions): Promise<CreateShipSystemScan201Response> {
        return this.api.createShipSystemScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param param the request object
     */
    public createShipWaypointScanWithHttpInfo(param: FleetApiCreateShipWaypointScanRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateShipWaypointScan201Response>> {
        return this.api.createShipWaypointScanWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param param the request object
     */
    public createShipWaypointScan(param: FleetApiCreateShipWaypointScanRequest, options?: ConfigurationOptions): Promise<CreateShipWaypointScan201Response> {
        return this.api.createShipWaypointScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param param the request object
     */
    public createSurveyWithHttpInfo(param: FleetApiCreateSurveyRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateSurvey201Response>> {
        return this.api.createSurveyWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param param the request object
     */
    public createSurvey(param: FleetApiCreateSurveyRequest, options?: ConfigurationOptions): Promise<CreateSurvey201Response> {
        return this.api.createSurvey(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param param the request object
     */
    public dockShipWithHttpInfo(param: FleetApiDockShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<DockShip200Response>> {
        return this.api.dockShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param param the request object
     */
    public dockShip(param: FleetApiDockShipRequest, options?: ConfigurationOptions): Promise<DockShip200Response> {
        return this.api.dockShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param param the request object
     */
    public extractResourcesWithHttpInfo(param: FleetApiExtractResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExtractResources201Response>> {
        return this.api.extractResourcesWithHttpInfo(param.shipSymbol, param.extractResourcesRequest,  options).toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param param the request object
     */
    public extractResources(param: FleetApiExtractResourcesRequest, options?: ConfigurationOptions): Promise<ExtractResources201Response> {
        return this.api.extractResources(param.shipSymbol, param.extractResourcesRequest,  options).toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param param the request object
     */
    public extractResourcesWithSurveyWithHttpInfo(param: FleetApiExtractResourcesWithSurveyRequest, options?: ConfigurationOptions): Promise<HttpInfo<ExtractResources201Response>> {
        return this.api.extractResourcesWithSurveyWithHttpInfo(param.shipSymbol, param.survey,  options).toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param param the request object
     */
    public extractResourcesWithSurvey(param: FleetApiExtractResourcesWithSurveyRequest, options?: ConfigurationOptions): Promise<ExtractResources201Response> {
        return this.api.extractResourcesWithSurvey(param.shipSymbol, param.survey,  options).toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param param the request object
     */
    public getMountsWithHttpInfo(param: FleetApiGetMountsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMounts200Response>> {
        return this.api.getMountsWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param param the request object
     */
    public getMounts(param: FleetApiGetMountsRequest, options?: ConfigurationOptions): Promise<GetMounts200Response> {
        return this.api.getMounts(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param param the request object
     */
    public getMyShipWithHttpInfo(param: FleetApiGetMyShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMyShip200Response>> {
        return this.api.getMyShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param param the request object
     */
    public getMyShip(param: FleetApiGetMyShipRequest, options?: ConfigurationOptions): Promise<GetMyShip200Response> {
        return this.api.getMyShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param param the request object
     */
    public getMyShipCargoWithHttpInfo(param: FleetApiGetMyShipCargoRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMyShipCargo200Response>> {
        return this.api.getMyShipCargoWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param param the request object
     */
    public getMyShipCargo(param: FleetApiGetMyShipCargoRequest, options?: ConfigurationOptions): Promise<GetMyShipCargo200Response> {
        return this.api.getMyShipCargo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param param the request object
     */
    public getMyShipsWithHttpInfo(param: FleetApiGetMyShipsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetMyShips200Response>> {
        return this.api.getMyShipsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param param the request object
     */
    public getMyShips(param: FleetApiGetMyShipsRequest = {}, options?: ConfigurationOptions): Promise<GetMyShips200Response> {
        return this.api.getMyShips(param.page, param.limit,  options).toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param param the request object
     */
    public getRepairShipWithHttpInfo(param: FleetApiGetRepairShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetRepairShip200Response>> {
        return this.api.getRepairShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param param the request object
     */
    public getRepairShip(param: FleetApiGetRepairShipRequest, options?: ConfigurationOptions): Promise<GetRepairShip200Response> {
        return this.api.getRepairShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param param the request object
     */
    public getScrapShipWithHttpInfo(param: FleetApiGetScrapShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetScrapShip200Response>> {
        return this.api.getScrapShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param param the request object
     */
    public getScrapShip(param: FleetApiGetScrapShipRequest, options?: ConfigurationOptions): Promise<GetScrapShip200Response> {
        return this.api.getScrapShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param param the request object
     */
    public getShipCooldownWithHttpInfo(param: FleetApiGetShipCooldownRequest, options?: ConfigurationOptions): Promise<HttpInfo<void | GetShipCooldown200Response>> {
        return this.api.getShipCooldownWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param param the request object
     */
    public getShipCooldown(param: FleetApiGetShipCooldownRequest, options?: ConfigurationOptions): Promise<void | GetShipCooldown200Response> {
        return this.api.getShipCooldown(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param param the request object
     */
    public getShipNavWithHttpInfo(param: FleetApiGetShipNavRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetShipNav200Response>> {
        return this.api.getShipNavWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param param the request object
     */
    public getShipNav(param: FleetApiGetShipNavRequest, options?: ConfigurationOptions): Promise<GetShipNav200Response> {
        return this.api.getShipNav(param.shipSymbol,  options).toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param param the request object
     */
    public installMountWithHttpInfo(param: FleetApiInstallMountRequest, options?: ConfigurationOptions): Promise<HttpInfo<InstallMount201Response>> {
        return this.api.installMountWithHttpInfo(param.shipSymbol, param.installMountRequest,  options).toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param param the request object
     */
    public installMount(param: FleetApiInstallMountRequest, options?: ConfigurationOptions): Promise<InstallMount201Response> {
        return this.api.installMount(param.shipSymbol, param.installMountRequest,  options).toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param param the request object
     */
    public jettisonWithHttpInfo(param: FleetApiJettisonRequest, options?: ConfigurationOptions): Promise<HttpInfo<Jettison200Response>> {
        return this.api.jettisonWithHttpInfo(param.shipSymbol, param.jettisonRequest,  options).toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param param the request object
     */
    public jettison(param: FleetApiJettisonRequest, options?: ConfigurationOptions): Promise<Jettison200Response> {
        return this.api.jettison(param.shipSymbol, param.jettisonRequest,  options).toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param param the request object
     */
    public jumpShipWithHttpInfo(param: FleetApiJumpShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<JumpShip200Response>> {
        return this.api.jumpShipWithHttpInfo(param.shipSymbol, param.jumpShipRequest,  options).toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param param the request object
     */
    public jumpShip(param: FleetApiJumpShipRequest, options?: ConfigurationOptions): Promise<JumpShip200Response> {
        return this.api.jumpShip(param.shipSymbol, param.jumpShipRequest,  options).toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param param the request object
     */
    public navigateShipWithHttpInfo(param: FleetApiNavigateShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<NavigateShip200Response>> {
        return this.api.navigateShipWithHttpInfo(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param param the request object
     */
    public navigateShip(param: FleetApiNavigateShipRequest, options?: ConfigurationOptions): Promise<NavigateShip200Response> {
        return this.api.navigateShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param param the request object
     */
    public negotiateContractWithHttpInfo(param: FleetApiNegotiateContractRequest, options?: ConfigurationOptions): Promise<HttpInfo<NegotiateContract200Response>> {
        return this.api.negotiateContractWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param param the request object
     */
    public negotiateContract(param: FleetApiNegotiateContractRequest, options?: ConfigurationOptions): Promise<NegotiateContract200Response> {
        return this.api.negotiateContract(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param param the request object
     */
    public orbitShipWithHttpInfo(param: FleetApiOrbitShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<OrbitShip200Response>> {
        return this.api.orbitShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param param the request object
     */
    public orbitShip(param: FleetApiOrbitShipRequest, options?: ConfigurationOptions): Promise<OrbitShip200Response> {
        return this.api.orbitShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param param the request object
     */
    public patchShipNavWithHttpInfo(param: FleetApiPatchShipNavRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetShipNav200Response>> {
        return this.api.patchShipNavWithHttpInfo(param.shipSymbol, param.patchShipNavRequest,  options).toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param param the request object
     */
    public patchShipNav(param: FleetApiPatchShipNavRequest, options?: ConfigurationOptions): Promise<GetShipNav200Response> {
        return this.api.patchShipNav(param.shipSymbol, param.patchShipNavRequest,  options).toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param param the request object
     */
    public purchaseCargoWithHttpInfo(param: FleetApiPurchaseCargoRequest, options?: ConfigurationOptions): Promise<HttpInfo<PurchaseCargo201Response>> {
        return this.api.purchaseCargoWithHttpInfo(param.shipSymbol, param.purchaseCargoRequest,  options).toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param param the request object
     */
    public purchaseCargo(param: FleetApiPurchaseCargoRequest, options?: ConfigurationOptions): Promise<PurchaseCargo201Response> {
        return this.api.purchaseCargo(param.shipSymbol, param.purchaseCargoRequest,  options).toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param param the request object
     */
    public purchaseShipWithHttpInfo(param: FleetApiPurchaseShipRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PurchaseShip201Response>> {
        return this.api.purchaseShipWithHttpInfo(param.purchaseShipRequest,  options).toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param param the request object
     */
    public purchaseShip(param: FleetApiPurchaseShipRequest = {}, options?: ConfigurationOptions): Promise<PurchaseShip201Response> {
        return this.api.purchaseShip(param.purchaseShipRequest,  options).toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param param the request object
     */
    public refuelShipWithHttpInfo(param: FleetApiRefuelShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<RefuelShip200Response>> {
        return this.api.refuelShipWithHttpInfo(param.shipSymbol, param.refuelShipRequest,  options).toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param param the request object
     */
    public refuelShip(param: FleetApiRefuelShipRequest, options?: ConfigurationOptions): Promise<RefuelShip200Response> {
        return this.api.refuelShip(param.shipSymbol, param.refuelShipRequest,  options).toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param param the request object
     */
    public removeMountWithHttpInfo(param: FleetApiRemoveMountRequest, options?: ConfigurationOptions): Promise<HttpInfo<RemoveMount201Response>> {
        return this.api.removeMountWithHttpInfo(param.shipSymbol, param.removeMountRequest,  options).toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param param the request object
     */
    public removeMount(param: FleetApiRemoveMountRequest, options?: ConfigurationOptions): Promise<RemoveMount201Response> {
        return this.api.removeMount(param.shipSymbol, param.removeMountRequest,  options).toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param param the request object
     */
    public repairShipWithHttpInfo(param: FleetApiRepairShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<RepairShip200Response>> {
        return this.api.repairShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param param the request object
     */
    public repairShip(param: FleetApiRepairShipRequest, options?: ConfigurationOptions): Promise<RepairShip200Response> {
        return this.api.repairShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param param the request object
     */
    public scrapShipWithHttpInfo(param: FleetApiScrapShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<ScrapShip200Response>> {
        return this.api.scrapShipWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param param the request object
     */
    public scrapShip(param: FleetApiScrapShipRequest, options?: ConfigurationOptions): Promise<ScrapShip200Response> {
        return this.api.scrapShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param param the request object
     */
    public sellCargoWithHttpInfo(param: FleetApiSellCargoRequest, options?: ConfigurationOptions): Promise<HttpInfo<SellCargo201Response>> {
        return this.api.sellCargoWithHttpInfo(param.shipSymbol, param.sellCargoRequest,  options).toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param param the request object
     */
    public sellCargo(param: FleetApiSellCargoRequest, options?: ConfigurationOptions): Promise<SellCargo201Response> {
        return this.api.sellCargo(param.shipSymbol, param.sellCargoRequest,  options).toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 100 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param param the request object
     */
    public shipRefineWithHttpInfo(param: FleetApiShipRefineRequest, options?: ConfigurationOptions): Promise<HttpInfo<ShipRefine201Response>> {
        return this.api.shipRefineWithHttpInfo(param.shipSymbol, param.shipRefineRequest,  options).toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 100 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param param the request object
     */
    public shipRefine(param: FleetApiShipRefineRequest, options?: ConfigurationOptions): Promise<ShipRefine201Response> {
        return this.api.shipRefine(param.shipSymbol, param.shipRefineRequest,  options).toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param param the request object
     */
    public siphonResourcesWithHttpInfo(param: FleetApiSiphonResourcesRequest, options?: ConfigurationOptions): Promise<HttpInfo<SiphonResources201Response>> {
        return this.api.siphonResourcesWithHttpInfo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param param the request object
     */
    public siphonResources(param: FleetApiSiphonResourcesRequest, options?: ConfigurationOptions): Promise<SiphonResources201Response> {
        return this.api.siphonResources(param.shipSymbol,  options).toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param param the request object
     */
    public transferCargoWithHttpInfo(param: FleetApiTransferCargoRequest, options?: ConfigurationOptions): Promise<HttpInfo<TransferCargo200Response>> {
        return this.api.transferCargoWithHttpInfo(param.shipSymbol, param.transferCargoRequest,  options).toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param param the request object
     */
    public transferCargo(param: FleetApiTransferCargoRequest, options?: ConfigurationOptions): Promise<TransferCargo200Response> {
        return this.api.transferCargo(param.shipSymbol, param.transferCargoRequest,  options).toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param param the request object
     */
    public warpShipWithHttpInfo(param: FleetApiWarpShipRequest, options?: ConfigurationOptions): Promise<HttpInfo<WarpShip200Response>> {
        return this.api.warpShipWithHttpInfo(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param param the request object
     */
    public warpShip(param: FleetApiWarpShipRequest, options?: ConfigurationOptions): Promise<WarpShip200Response> {
        return this.api.warpShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

}

import { ObservableGlobalApi } from "./ObservableAPI";
import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi";

export interface GlobalApiGetStatusRequest {
}

export interface GlobalApiRegisterRequest {
    /**
     * 
     * @type RegisterRequest
     * @memberof GlobalApiregister
     */
    registerRequest?: RegisterRequest
}

export class ObjectGlobalApi {
    private api: ObservableGlobalApi

    public constructor(configuration: Configuration, requestFactory?: GlobalApiRequestFactory, responseProcessor?: GlobalApiResponseProcessor) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     * @param param the request object
     */
    public getStatusWithHttpInfo(param: GlobalApiGetStatusRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetStatus200Response>> {
        return this.api.getStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     * @param param the request object
     */
    public getStatus(param: GlobalApiGetStatusRequest = {}, options?: ConfigurationOptions): Promise<GetStatus200Response> {
        return this.api.getStatus( options).toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 175,000 credits.  > #### Keep your token safe and secure > > Keep careful track of where you store your token. You can generate a new token from our account dashboard, but if someone else gains access to your token they will be able to use it to make API requests on your behalf until the end of the reset.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through a few basic API requests in just a few minutes.
     * Register New Agent
     * @param param the request object
     */
    public registerWithHttpInfo(param: GlobalApiRegisterRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Register201Response>> {
        return this.api.registerWithHttpInfo(param.registerRequest,  options).toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 175,000 credits.  > #### Keep your token safe and secure > > Keep careful track of where you store your token. You can generate a new token from our account dashboard, but if someone else gains access to your token they will be able to use it to make API requests on your behalf until the end of the reset.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through a few basic API requests in just a few minutes.
     * Register New Agent
     * @param param the request object
     */
    public register(param: GlobalApiRegisterRequest = {}, options?: ConfigurationOptions): Promise<Register201Response> {
        return this.api.register(param.registerRequest,  options).toPromise();
    }

}

import { ObservableSystemsApi } from "./ObservableAPI";
import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi";

export interface SystemsApiGetConstructionRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetConstruction
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetConstruction
     */
    waypointSymbol: string
}

export interface SystemsApiGetJumpGateRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    waypointSymbol: string
}

export interface SystemsApiGetMarketRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetMarket
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetMarket
     */
    waypointSymbol: string
}

export interface SystemsApiGetShipyardRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetShipyard
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetShipyard
     */
    waypointSymbol: string
}

export interface SystemsApiGetSystemRequest {
    /**
     * The system symbol
     * Defaults to: &#39;X1-OE&#39;
     * @type string
     * @memberof SystemsApigetSystem
     */
    systemSymbol: string
}

export interface SystemsApiGetSystemWaypointsRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetSystemWaypoints
     */
    systemSymbol: string
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    limit?: number
    /**
     * Filter waypoints by type.
     * Defaults to: undefined
     * @type WaypointType
     * @memberof SystemsApigetSystemWaypoints
     */
    type?: WaypointType
    /**
     * Filter waypoints by one or more traits.
     * Defaults to: undefined
     * @type GetSystemWaypointsTraitsParameter
     * @memberof SystemsApigetSystemWaypoints
     */
    traits?: GetSystemWaypointsTraitsParameter
}

export interface SystemsApiGetSystemsRequest {
    /**
     * What entry offset to request
     * Minimum: 1
     * Defaults to: 1
     * @type number
     * @memberof SystemsApigetSystems
     */
    page?: number
    /**
     * How many entries to return per page
     * Minimum: 1
     * Maximum: 20
     * Defaults to: 10
     * @type number
     * @memberof SystemsApigetSystems
     */
    limit?: number
}

export interface SystemsApiGetWaypointRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    waypointSymbol: string
}

export interface SystemsApiSupplyConstructionRequest {
    /**
     * The system symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApisupplyConstruction
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * Defaults to: undefined
     * @type string
     * @memberof SystemsApisupplyConstruction
     */
    waypointSymbol: string
    /**
     * 
     * @type SupplyConstructionRequest
     * @memberof SystemsApisupplyConstruction
     */
    supplyConstructionRequest?: SupplyConstructionRequest
}

export class ObjectSystemsApi {
    private api: ObservableSystemsApi

    public constructor(configuration: Configuration, requestFactory?: SystemsApiRequestFactory, responseProcessor?: SystemsApiResponseProcessor) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param param the request object
     */
    public getConstructionWithHttpInfo(param: SystemsApiGetConstructionRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetConstruction200Response>> {
        return this.api.getConstructionWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param param the request object
     */
    public getConstruction(param: SystemsApiGetConstructionRequest, options?: ConfigurationOptions): Promise<GetConstruction200Response> {
        return this.api.getConstruction(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param param the request object
     */
    public getJumpGateWithHttpInfo(param: SystemsApiGetJumpGateRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetJumpGate200Response>> {
        return this.api.getJumpGateWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param param the request object
     */
    public getJumpGate(param: SystemsApiGetJumpGateRequest, options?: ConfigurationOptions): Promise<GetJumpGate200Response> {
        return this.api.getJumpGate(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param param the request object
     */
    public getMarketWithHttpInfo(param: SystemsApiGetMarketRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetMarket200Response>> {
        return this.api.getMarketWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param param the request object
     */
    public getMarket(param: SystemsApiGetMarketRequest, options?: ConfigurationOptions): Promise<GetMarket200Response> {
        return this.api.getMarket(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param param the request object
     */
    public getShipyardWithHttpInfo(param: SystemsApiGetShipyardRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetShipyard200Response>> {
        return this.api.getShipyardWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param param the request object
     */
    public getShipyard(param: SystemsApiGetShipyardRequest, options?: ConfigurationOptions): Promise<GetShipyard200Response> {
        return this.api.getShipyard(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param param the request object
     */
    public getSystemWithHttpInfo(param: SystemsApiGetSystemRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetSystem200Response>> {
        return this.api.getSystemWithHttpInfo(param.systemSymbol,  options).toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param param the request object
     */
    public getSystem(param: SystemsApiGetSystemRequest, options?: ConfigurationOptions): Promise<GetSystem200Response> {
        return this.api.getSystem(param.systemSymbol,  options).toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param param the request object
     */
    public getSystemWaypointsWithHttpInfo(param: SystemsApiGetSystemWaypointsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetSystemWaypoints200Response>> {
        return this.api.getSystemWaypointsWithHttpInfo(param.systemSymbol, param.page, param.limit, param.type, param.traits,  options).toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param param the request object
     */
    public getSystemWaypoints(param: SystemsApiGetSystemWaypointsRequest, options?: ConfigurationOptions): Promise<GetSystemWaypoints200Response> {
        return this.api.getSystemWaypoints(param.systemSymbol, param.page, param.limit, param.type, param.traits,  options).toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param param the request object
     */
    public getSystemsWithHttpInfo(param: SystemsApiGetSystemsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<GetSystems200Response>> {
        return this.api.getSystemsWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param param the request object
     */
    public getSystems(param: SystemsApiGetSystemsRequest = {}, options?: ConfigurationOptions): Promise<GetSystems200Response> {
        return this.api.getSystems(param.page, param.limit,  options).toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param param the request object
     */
    public getWaypointWithHttpInfo(param: SystemsApiGetWaypointRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetWaypoint200Response>> {
        return this.api.getWaypointWithHttpInfo(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param param the request object
     */
    public getWaypoint(param: SystemsApiGetWaypointRequest, options?: ConfigurationOptions): Promise<GetWaypoint200Response> {
        return this.api.getWaypoint(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param param the request object
     */
    public supplyConstructionWithHttpInfo(param: SystemsApiSupplyConstructionRequest, options?: ConfigurationOptions): Promise<HttpInfo<SupplyConstruction201Response>> {
        return this.api.supplyConstructionWithHttpInfo(param.systemSymbol, param.waypointSymbol, param.supplyConstructionRequest,  options).toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param param the request object
     */
    public supplyConstruction(param: SystemsApiSupplyConstructionRequest, options?: ConfigurationOptions): Promise<SupplyConstruction201Response> {
        return this.api.supplyConstruction(param.systemSymbol, param.waypointSymbol, param.supplyConstructionRequest,  options).toPromise();
    }

}
