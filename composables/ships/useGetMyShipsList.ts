import { useGetList } from '~/composables/generic/useGetList';
import type { Ship } from '~/types/Ship';

export const useGetMyShipsList = async (page?: number, limit?: number) => 
    useGetList<Ship>('my/ships', page, limit);
