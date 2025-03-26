import type { Agent } from '~/types/Agent';
import { API_URL } from './../../constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const usernameErrorMessage = useUsernameErrorMessage();

export const useSearchAgent = async (agentName: string) => {
    usernameErrorMessage.value = '';

    const { data, error } = await useFetch<{ data: Agent }>(
        `${API_URL}agents/${agentName}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${userdata.value.token}`,
            },
        }
    );

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        switch (errorData.error.code) {
            case 404:
                usernameErrorMessage.value = 'Nav tāds lietotājs';
                break;
            case 429:
                usernameErrorMessage.value = 'Pārāk daudz pieprasījumu';
                break;
            default:
                usernameErrorMessage.value = 'Kļūda meklējot';
                break;
        }
    }

    return data.value?.data!;
};
