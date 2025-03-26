import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAgentsApi } from './ObservableAPI';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";
export class PromiseAgentsApi {
    private api: ObservableAgentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgentWithHttpInfo(agentSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMyAgent200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAgentWithHttpInfo(agentSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch agent details.
     * Get Public Agent
     * @param agentSymbol The agent symbol
     */
    public getAgent(agentSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetMyAgent200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAgent(agentSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getAgentsWithHttpInfo(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAgents200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAgentsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch agents details.
     * List Agents
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getAgents(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<GetAgents200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAgents(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgentWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMyAgent200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyAgentWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch your agent\'s details.
     * Get Agent
     */
    public getMyAgent(_options?: PromiseConfigurationOptions): Promise<GetMyAgent200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyAgent(observableOptions);
        return result.toPromise();
    }


}



import { ObservableContractsApi } from './ObservableAPI';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContractWithHttpInfo(contractId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AcceptContract200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.acceptContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Accept a contract by ID.   You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     * Accept Contract
     * @param contractId The contract ID to accept.
     */
    public acceptContract(contractId: string, _options?: PromiseConfigurationOptions): Promise<AcceptContract200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.acceptContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param [deliverContractRequest] 
     */
    public deliverContractWithHttpInfo(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeliverContract200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deliverContractWithHttpInfo(contractId, deliverContractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deliver cargo to a contract.  In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.  Cargo that was delivered will be removed from the ship\'s cargo.
     * Deliver Cargo to Contract
     * @param contractId The ID of the contract.
     * @param [deliverContractRequest] 
     */
    public deliverContract(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: PromiseConfigurationOptions): Promise<DeliverContract200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deliverContract(contractId, deliverContractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContractWithHttpInfo(contractId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FulfillContract200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.fulfillContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     * Fulfill Contract
     * @param contractId The ID of the contract to fulfill.
     */
    public fulfillContract(contractId: string, _options?: PromiseConfigurationOptions): Promise<FulfillContract200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.fulfillContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContractWithHttpInfo(contractId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetContract200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContract(contractId: string, _options?: PromiseConfigurationOptions): Promise<GetContract200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getContractsWithHttpInfo(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetContracts200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContractsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all your contracts.
     * List Contracts
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getContracts(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<GetContracts200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContracts(page, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDataApi } from './ObservableAPI';

import { DataApiRequestFactory, DataApiResponseProcessor} from "../apis/DataApi";
export class PromiseDataApi {
    private api: ObservableDataApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataApiRequestFactory,
        responseProcessor?: DataApiResponseProcessor
    ) {
        this.api = new ObservableDataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Describes which import and exports map to each other.
     * Get Supply Chain
     */
    public getSupplyChainWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSupplyChainWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Describes which import and exports map to each other.
     * Get Supply Chain
     */
    public getSupplyChain(_options?: PromiseConfigurationOptions): Promise<any> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSupplyChain(observableOptions);
        return result.toPromise();
    }


}



import { ObservableFactionsApi } from './ObservableAPI';

import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi";
export class PromiseFactionsApi {
    private api: ObservableFactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FactionsApiRequestFactory,
        responseProcessor?: FactionsApiResponseProcessor
    ) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFactionWithHttpInfo(factionSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetFaction200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFactionWithHttpInfo(factionSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFaction(factionSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetFaction200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFaction(factionSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getFactionsWithHttpInfo(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetFactions200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFactionsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all the factions in the game.
     * List Factions
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getFactions(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<GetFactions200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getFactions(page, limit, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFleetApi } from './ObservableAPI';

import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi";
export class PromiseFleetApi {
    private api: ObservableFleetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FleetApiRequestFactory,
        responseProcessor?: FleetApiResponseProcessor
    ) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChartWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateChart201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createChartWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Command a ship to chart the waypoint at its current location.  Most waypoints in the universe are uncharted by default. These waypoints have their traits hidden until they have been charted by a ship.  Charting a waypoint will record your agent as the one who created the chart, and all other agents would also be able to see the waypoint\'s traits.
     * Create Chart
     * @param shipSymbol The symbol of the ship.
     */
    public createChart(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<CreateChart201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createChart(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScanWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateShipShipScan201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipShipScanWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby ships, retrieving information for all ships in range.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Ships
     * @param shipSymbol The ship symbol.
     */
    public createShipShipScan(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<CreateShipShipScan201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipShipScan(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScanWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateShipSystemScan201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipSystemScanWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby systems, retrieving information on the systems\' distance from the ship and their waypoints. Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Systems
     * @param shipSymbol The ship symbol.
     */
    public createShipSystemScan(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<CreateShipSystemScan201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipSystemScan(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScanWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateShipWaypointScan201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipWaypointScanWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scan for nearby waypoints, retrieving detailed information on each waypoint in range. Scanning uncharted waypoints will allow you to ignore their uncharted state and will list the waypoints\' traits.  Requires a ship to have the `Sensor Array` mount installed to use.  The ship will enter a cooldown after using this function, during which it cannot execute certain actions.
     * Scan Waypoints
     * @param shipSymbol The ship symbol.
     */
    public createShipWaypointScan(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<CreateShipWaypointScan201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createShipWaypointScan(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurveyWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateSurvey201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSurveyWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Create surveys on a waypoint that can be extracted such as asteroid fields. A survey focuses on specific types of deposits from the extracted location. When ships extract using this survey, they are guaranteed to procure a high amount of one of the goods in the survey.  In order to use a survey, send the entire survey details in the body of the extract request.  Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown after surveying in which it is unable to perform certain actions. Surveys will eventually expire after a period of time or will be exhausted after being extracted several times based on the survey\'s size. Multiple ships can use the same survey for extraction.  A ship must have the `Surveyor` mount installed in order to use this function.
     * Create Survey
     * @param shipSymbol The symbol of the ship.
     */
    public createSurvey(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<CreateSurvey201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createSurvey(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DockShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dockShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to dock your ship at its current location. Docking will only succeed if your ship is capable of docking at the time of the request.  Docked ships can access elements in their current location, such as the market or a shipyard, but cannot do actions that require the ship to be above surface such as navigating or extracting.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship.
     */
    public dockShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<DockShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.dockShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param [extractResourcesRequest]
     */
    public extractResourcesWithHttpInfo(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExtractResources201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.extractResourcesWithHttpInfo(shipSymbol, extractResourcesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Extract resources from a waypoint that can be extracted, such as asteroid fields, into your ship. Send an optional survey as the payload to target specific yields.  The ship must be in orbit to be able to extract and must have mining equipments installed that can extract goods, such as the `Gas Siphon` mount for gas-based goods or `Mining Laser` mount for ore-based goods.  The survey property is now deprecated. See the `extract/survey` endpoint for more details.
     * Extract Resources
     * @param shipSymbol The ship symbol.
     * @param [extractResourcesRequest]
     */
    public extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: PromiseConfigurationOptions): Promise<ExtractResources201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.extractResources(shipSymbol, extractResourcesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param [survey]
     */
    public extractResourcesWithSurveyWithHttpInfo(shipSymbol: string, survey?: Survey, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ExtractResources201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.extractResourcesWithSurveyWithHttpInfo(shipSymbol, survey, observableOptions);
        return result.toPromise();
    }

    /**
     * Use a survey when extracting resources from a waypoint. This endpoint requires a survey as the payload, which allows your ship to extract specific yields.  Send the full survey object as the payload which will be validated according to the signature. If the signature is invalid, or any properties of the survey are changed, the request will fail.
     * Extract Resources with Survey
     * @param shipSymbol The ship symbol.
     * @param [survey]
     */
    public extractResourcesWithSurvey(shipSymbol: string, survey?: Survey, _options?: PromiseConfigurationOptions): Promise<ExtractResources201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.extractResourcesWithSurvey(shipSymbol, survey, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMountsWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMounts200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMountsWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the mounts installed on a ship.
     * Get Mounts
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public getMounts(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetMounts200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMounts(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMyShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the details of a ship under your agent\'s ownership.
     * Get Ship
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetMyShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargoWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMyShipCargo200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShipCargoWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the cargo of a ship under your agent\'s ownership.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship.
     */
    public getMyShipCargo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetMyShipCargo200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShipCargo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getMyShipsWithHttpInfo(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMyShips200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShipsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of ships under your agent\'s ownership.
     * List Ships
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getMyShips(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<GetMyShips200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMyShips(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetRepairShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRepairShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the cost of repairing a ship.
     * Get Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public getRepairShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetRepairShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getRepairShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetScrapShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getScrapShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the amount of value that will be returned when scrapping a ship.
     * Get Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public getScrapShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetScrapShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getScrapShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldownWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void | GetShipCooldown200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipCooldownWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol The symbol of the ship.
     */
    public getShipCooldown(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<void | GetShipCooldown200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipCooldown(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNavWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetShipNav200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipNavWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol.
     */
    public getShipNav(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetShipNav200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipNav(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [installMountRequest]
     */
    public installMountWithHttpInfo(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<InstallMount201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.installMountWithHttpInfo(shipSymbol, installMountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Install a mount on a ship.  In order to install a mount, the ship must be docked and located in a waypoint that has a `Shipyard` trait. The ship also must have the mount to install in its cargo hold.  An installation fee will be deduced by the Shipyard for installing the mount on the ship. 
     * Install Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [installMountRequest]
     */
    public installMount(shipSymbol: string, installMountRequest?: InstallMountRequest, _options?: PromiseConfigurationOptions): Promise<InstallMount201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.installMount(shipSymbol, installMountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param [jettisonRequest]
     */
    public jettisonWithHttpInfo(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Jettison200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.jettisonWithHttpInfo(shipSymbol, jettisonRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol The ship symbol.
     * @param [jettisonRequest]
     */
    public jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: PromiseConfigurationOptions): Promise<Jettison200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.jettison(shipSymbol, jettisonRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param [jumpShipRequest]
     */
    public jumpShipWithHttpInfo(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<JumpShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.jumpShipWithHttpInfo(shipSymbol, jumpShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Jump your ship instantly to a target connected waypoint. The ship must be in orbit to execute a jump.  A unit of antimatter is purchased and consumed from the market when jumping. The price of antimatter is determined by the market and is subject to change. A ship can only jump to connected waypoints
     * Jump Ship
     * @param shipSymbol The ship symbol.
     * @param [jumpShipRequest]
     */
    public jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: PromiseConfigurationOptions): Promise<JumpShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.jumpShip(shipSymbol, jumpShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param [navigateShipRequest] 
     */
    public navigateShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NavigateShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.navigateShipWithHttpInfo(shipSymbol, navigateShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Navigate to a target destination. The ship must be in orbit to use this function. The destination waypoint must be within the same system as the ship\'s current location. Navigating will consume the necessary fuel from the ship\'s manifest based on the distance to the target waypoint.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s Warp or Jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol.
     * @param [navigateShipRequest] 
     */
    public navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: PromiseConfigurationOptions): Promise<NavigateShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.navigateShip(shipSymbol, navigateShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContractWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NegotiateContract200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.negotiateContractWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Negotiate a new contract with the HQ.  In order to negotiate a new contract, an agent must not have ongoing or offered contracts over the allowed maximum amount. Currently the maximum contracts an agent can have at a time is 1.  Once a contract is negotiated, it is added to the list of contracts offered to the agent, which the agent can then accept.   The ship must be present at any waypoint with a faction present to negotiate a contract with that faction.
     * Negotiate Contract
     * @param shipSymbol The ship\&#39;s symbol.
     */
    public negotiateContract(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<NegotiateContract200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.negotiateContract(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<OrbitShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orbitShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to move your ship into orbit at its current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  Orbiting ships are able to do actions that require the ship to be above surface such as navigating or extracting, but cannot access elements in their current waypoint, such as the market or a shipyard.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship.
     */
    public orbitShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<OrbitShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.orbitShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param [patchShipNavRequest]
     */
    public patchShipNavWithHttpInfo(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetShipNav200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.patchShipNavWithHttpInfo(shipSymbol, patchShipNavRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the nav configuration of a ship.  Currently only supports configuring the Flight Mode of the ship, which affects its speed and fuel consumption.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol.
     * @param [patchShipNavRequest]
     */
    public patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: PromiseConfigurationOptions): Promise<GetShipNav200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.patchShipNav(shipSymbol, patchShipNavRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [purchaseCargoRequest]
     */
    public purchaseCargoWithHttpInfo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PurchaseCargo201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purchaseCargoWithHttpInfo(shipSymbol, purchaseCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Purchase cargo from a market.  The ship must be docked in a waypoint that has `Marketplace` trait, and the market must be selling a good to be able to purchase it.  The maximum amount of units of a good that can be purchased in each transaction are denoted by the `tradeVolume` value of the good, which can be viewed by using the Get Market action.  Purchased goods are added to the ship\'s cargo hold.
     * Purchase Cargo
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [purchaseCargoRequest]
     */
    public purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: PromiseConfigurationOptions): Promise<PurchaseCargo201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purchaseCargo(shipSymbol, purchaseCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param [purchaseShipRequest]
     */
    public purchaseShipWithHttpInfo(purchaseShipRequest?: PurchaseShipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PurchaseShip201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purchaseShipWithHttpInfo(purchaseShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Purchase a ship from a Shipyard. In order to use this function, a ship under your agent\'s ownership must be in a waypoint that has the `Shipyard` trait, and the Shipyard must sell the type of the desired ship.  Shipyards typically offer ship types, which are predefined templates of ships that have dedicated roles. A template comes with a preset of an engine, a reactor, and a frame. It may also include a few modules and mounts.
     * Purchase Ship
     * @param [purchaseShipRequest]
     */
    public purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: PromiseConfigurationOptions): Promise<PurchaseShip201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.purchaseShip(purchaseShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param [refuelShipRequest]
     */
    public refuelShipWithHttpInfo(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RefuelShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.refuelShipWithHttpInfo(shipSymbol, refuelShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Refuel your ship by buying fuel from the local market.  Requires the ship to be docked in a waypoint that has the `Marketplace` trait, and the market must be selling fuel in order to refuel.  Each fuel bought from the market replenishes 100 units in your ship\'s fuel.  Ships will always be refuel to their frame\'s maximum fuel capacity when using this action.
     * Refuel Ship
     * @param shipSymbol The ship symbol.
     * @param [refuelShipRequest]
     */
    public refuelShip(shipSymbol: string, refuelShipRequest?: RefuelShipRequest, _options?: PromiseConfigurationOptions): Promise<RefuelShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.refuelShip(shipSymbol, refuelShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [removeMountRequest]
     */
    public removeMountWithHttpInfo(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RemoveMount201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.removeMountWithHttpInfo(shipSymbol, removeMountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove a mount from a ship.  The ship must be docked in a waypoint that has the `Shipyard` trait, and must have the desired mount that it wish to remove installed.  A removal fee will be deduced from the agent by the Shipyard.
     * Remove Mount
     * @param shipSymbol The ship\&#39;s symbol.
     * @param [removeMountRequest]
     */
    public removeMount(shipSymbol: string, removeMountRequest?: RemoveMountRequest, _options?: PromiseConfigurationOptions): Promise<RemoveMount201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.removeMount(shipSymbol, removeMountRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<RepairShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.repairShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Repair a ship, restoring the ship to maximum condition. The ship must be docked at a waypoint that has the `Shipyard` trait in order to use this function. To preview the cost of repairing the ship, use the Get action.
     * Repair Ship
     * @param shipSymbol The ship symbol.
     */
    public repairShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<RepairShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.repairShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShipWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ScrapShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.scrapShipWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Scrap a ship, removing it from the game and returning a portion of the ship\'s value to the agent. The ship must be docked in a waypoint that has the `Shipyard` trait in order to use this function. To preview the amount of value that will be returned, use the Get Ship action.
     * Scrap Ship
     * @param shipSymbol The ship symbol.
     */
    public scrapShip(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<ScrapShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.scrapShip(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param [sellCargoRequest]
     */
    public sellCargoWithHttpInfo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SellCargo201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sellCargoWithHttpInfo(shipSymbol, sellCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Sell cargo in your ship to a market that trades this cargo. The ship must be docked in a waypoint that has the `Marketplace` trait in order to use this function.
     * Sell Cargo
     * @param shipSymbol Symbol of a ship.
     * @param [sellCargoRequest]
     */
    public sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: PromiseConfigurationOptions): Promise<SellCargo201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sellCargo(shipSymbol, sellCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 100 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param [shipRefineRequest]
     */
    public shipRefineWithHttpInfo(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ShipRefine201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.shipRefineWithHttpInfo(shipSymbol, shipRefineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request. In order to be able to refine, a ship must have goods that can be refined and have installed a `Refinery` module that can refine it.  When refining, 100 basic goods will be converted into 10 processed goods.
     * Ship Refine
     * @param shipSymbol The symbol of the ship.
     * @param [shipRefineRequest]
     */
    public shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: PromiseConfigurationOptions): Promise<ShipRefine201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.shipRefine(shipSymbol, shipRefineRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResourcesWithHttpInfo(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SiphonResources201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.siphonResourcesWithHttpInfo(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Siphon gases, such as hydrocarbon, from gas giants.  The ship must be in orbit to be able to siphon and must have siphon mounts and a gas processor installed.
     * Siphon Resources
     * @param shipSymbol The ship symbol.
     */
    public siphonResources(shipSymbol: string, _options?: PromiseConfigurationOptions): Promise<SiphonResources201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.siphonResources(shipSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param [transferCargoRequest]
     */
    public transferCargoWithHttpInfo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TransferCargo200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.transferCargoWithHttpInfo(shipSymbol, transferCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Transfer cargo between ships.  The receiving ship must be in the same waypoint as the transferring ship, and it must able to hold the additional cargo after the transfer is complete. Both ships also must be in the same state, either both are docked or both are orbiting.  The response body\'s cargo shows the cargo of the transferring ship after the transfer is complete.
     * Transfer Cargo
     * @param shipSymbol The transferring ship\&#39;s symbol.
     * @param [transferCargoRequest]
     */
    public transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: PromiseConfigurationOptions): Promise<TransferCargo200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.transferCargo(shipSymbol, transferCargoRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param [navigateShipRequest] 
     */
    public warpShipWithHttpInfo(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<WarpShip200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.warpShipWithHttpInfo(shipSymbol, navigateShipRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. The ship must be in orbit to use this function and must have the `Warp Drive` module installed. Warping will consume the necessary fuel from the ship\'s manifest.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at its destination.
     * Warp Ship
     * @param shipSymbol The ship symbol.
     * @param [navigateShipRequest] 
     */
    public warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: PromiseConfigurationOptions): Promise<WarpShip200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.warpShip(shipSymbol, navigateShipRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableGlobalApi } from './ObservableAPI';

import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi";
export class PromiseGlobalApi {
    private api: ObservableGlobalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalApiRequestFactory,
        responseProcessor?: GlobalApiResponseProcessor
    ) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatusWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<GetStatus200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getStatusWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     * Get Status
     */
    public getStatus(_options?: PromiseConfigurationOptions): Promise<GetStatus200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getStatus(observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 175,000 credits.  > #### Keep your token safe and secure > > Keep careful track of where you store your token. You can generate a new token from our account dashboard, but if someone else gains access to your token they will be able to use it to make API requests on your behalf until the end of the reset.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through a few basic API requests in just a few minutes.
     * Register New Agent
     * @param [registerRequest] 
     */
    public registerWithHttpInfo(registerRequest?: RegisterRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Register201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.registerWithHttpInfo(registerRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 175,000 credits.  > #### Keep your token safe and secure > > Keep careful track of where you store your token. You can generate a new token from our account dashboard, but if someone else gains access to your token they will be able to use it to make API requests on your behalf until the end of the reset.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through a few basic API requests in just a few minutes.
     * Register New Agent
     * @param [registerRequest] 
     */
    public register(registerRequest?: RegisterRequest, _options?: PromiseConfigurationOptions): Promise<Register201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.register(registerRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSystemsApi } from './ObservableAPI';

import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi";
export class PromiseSystemsApi {
    private api: ObservableSystemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemsApiRequestFactory,
        responseProcessor?: SystemsApiResponseProcessor
    ) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetConstruction200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getConstructionWithHttpInfo(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getConstruction(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetConstruction200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getConstruction(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGateWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetJumpGate200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getJumpGateWithHttpInfo(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be 
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetJumpGate200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getJumpGate(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarketWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMarket200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMarketWithHttpInfo(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarket(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetMarket200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMarket(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyardWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetShipyard200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipyardWithHttpInfo(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyard(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetShipyard200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getShipyard(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystemWithHttpInfo(systemSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSystem200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemWithHttpInfo(systemSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystem(systemSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetSystem200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystem(systemSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param systemSymbol The system symbol
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     * @param [type] Filter waypoints by type.
     * @param [traits] Filter waypoints by one or more traits.
     */
    public getSystemWaypointsWithHttpInfo(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSystemWaypoints200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemWaypointsWithHttpInfo(systemSymbol, page, limit, type, traits, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     * @param systemSymbol The system symbol
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     * @param [type] Filter waypoints by type.
     * @param [traits] Filter waypoints by one or more traits.
     */
    public getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, type?: WaypointType, traits?: GetSystemWaypointsTraitsParameter, _options?: PromiseConfigurationOptions): Promise<GetSystemWaypoints200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemWaypoints(systemSymbol, page, limit, type, traits, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getSystemsWithHttpInfo(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetSystems200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystemsWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     * @param [page] What entry offset to request
     * @param [limit] How many entries to return per page
     */
    public getSystems(page?: number, limit?: number, _options?: PromiseConfigurationOptions): Promise<GetSystems200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSystems(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypointWithHttpInfo(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetWaypoint200Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getWaypointWithHttpInfo(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: PromiseConfigurationOptions): Promise<GetWaypoint200Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getWaypoint(systemSymbol, waypointSymbol, observableOptions);
        return result.toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param [supplyConstructionRequest] 
     */
    public supplyConstructionWithHttpInfo(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SupplyConstruction201Response>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.supplyConstructionWithHttpInfo(systemSymbol, waypointSymbol, supplyConstructionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     * @param [supplyConstructionRequest] 
     */
    public supplyConstruction(systemSymbol: string, waypointSymbol: string, supplyConstructionRequest?: SupplyConstructionRequest, _options?: PromiseConfigurationOptions): Promise<SupplyConstruction201Response> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.supplyConstruction(systemSymbol, waypointSymbol, supplyConstructionRequest, observableOptions);
        return result.toPromise();
    }


}



