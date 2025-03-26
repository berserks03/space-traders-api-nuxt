import { API_URL } from '../../constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';
import type { getMyAgentResponse } from '~/types/Responses';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetMyAgent = async () => {
    requestErrorMessage.value = '';
    
    const { data, error } = await useFetch<getMyAgentResponse>(`${API_URL}my/agent`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        switch (errorData.error.code) {
            case 410:
                requestErrorMessage.value = 'Aģenta tokens trūkst';
                break;
            case 429:
                requestErrorMessage.value = 'Pārāk daudz pieprasījumu';
                break;
            default:
                requestErrorMessage.value = 'Kļūda iegūstot aģenta datus';
                break;
        }
    }

    return data.value?.data!;
};
