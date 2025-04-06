import { useGetList } from '~/composables/generic/useGetList';
import type { Agent } from '~/types/Agent';

export const useGetAgentsList = async (page?: number, limit?: number) =>
    useGetList<Agent>('agents', page, limit);
