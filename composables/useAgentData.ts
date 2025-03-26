import type { Agent } from '~/types/Agent';
import { useUrl } from './useUrl';
import type ErrorResponse from '~/types/ErrorResponse';

export const useAgentData = async (token: string) => {
    const { data, error } = await useFetch<{ data: Agent }>(useUrl('agent'), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (error.value) {        
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        const tokenErrorMessage = useTokenErrorMessage();
        tokenErrorMessage.value = `Failed to login user: ${errorData.error.message}`;
    }

    return data.value?.data!;
};
