import type { Agent } from "./Agent";
import type { Contract } from "./Contract";
import type { Faction } from "./Faction";
import type { Ship } from "./Ship";

export default interface RegisterResponse {
    token: string;
    agent: Agent;
    contract: Contract;
    faction: Faction;
    ship: Ship;
}

export interface UserData {
    token: string;
    agent: Agent;
    contracts: Contract[];
    faction: Faction;
    ships: Ship[];
}


