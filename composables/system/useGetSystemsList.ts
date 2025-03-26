import { useGetList } from '~/composables/generic/useGetList';
import type { System } from '~/types/System';

export const useGetSystemsList = async (page?: number, limit?: number) => 
    useGetList<System>('systems', page, limit);
