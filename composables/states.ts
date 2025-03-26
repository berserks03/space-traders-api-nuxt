import type { Agent } from '~/types/Agent';
import type { Faction } from '~/types/Faction';
import type { UserData } from '~/types/RegisterResponse';
import type { System, SystemType } from '~/types/System';

export const useUserData = () =>
    useState(
        'userData',
        (): UserData => ({
            token: '',
            agent: {} as Agent,
            contracts: [],
            faction: {} as Faction,
            ships: [],
        })
    );

export const useUsernameErrorMessage = () => useState('usernameErrorMessage', () => '');

export const useTokenErrorMessage = () => useState('tokenErrorMessage', () => '');

export const useRequestErrorMessage = () => useState('requestErrorMessage', () => '');

export const useSystemData = () =>
    useState(
        'systemData',
        (): System => ({
            symbol: '',
            sectorSymbol: '',
            type: '' as SystemType,
            x: 0,
            y: 0,
            waypoints: [],
            factions: [],
        })
    );
