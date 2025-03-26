import { useGetList } from '~/composables/generic/useGetList';
import type { Contract } from '~/types/Contract';

export const useGetMyContractsList = async (page?: number, limit?: number) => 
    useGetList<Contract>('my/contracts', page, limit);
