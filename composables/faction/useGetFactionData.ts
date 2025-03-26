import type { Faction } from '~/types/Faction';
import { API_URL } from '../../constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetFactionData = async (factionSymbol: string) => {
    requestErrorMessage.value = '';
    
    const { data, error } = await useFetch<{ data: Faction }>(
        `${API_URL}factions/${factionSymbol}`,
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
                    requestErrorMessage.value = 'No such faction';
                    break;
                case 429:
                    requestErrorMessage.value = 'Pārāk daudz pieprasījumu';
                    break;
                default:
                    requestErrorMessage.value = 'Error searching faction';
                    break;
            }
        }

    return data.value?.data!;
};
