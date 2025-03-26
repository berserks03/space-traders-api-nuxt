import { useGetList } from '~/composables/generic/useGetList';
import type { Faction } from '~/types/Faction';

export const useGetFactionsList = async () => useGetList<Faction>('factions', undefined, 20);
