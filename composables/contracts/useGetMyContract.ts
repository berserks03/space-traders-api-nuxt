import { API_URL } from '~/constants/constants';
import type { Contract } from '~/types/Contract';
import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetMyContract = async (contractID: string) => {
    requestErrorMessage.value = '';

    const { data, error } = await useFetch<{ data: Contract }>(
        `${API_URL}my/contracts/${contractID}`,
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
