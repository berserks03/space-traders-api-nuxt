import { useGetList } from '~/composables/generic/useGetList';
import type { Waypoint } from '~/types/System';

export const useGetSystemsWaypointsList = async (systemSymbol: string, page?: number, limit?: number) => 
    useGetList<Waypoint>(`systems/${systemSymbol}/waypoints`, page, limit);
