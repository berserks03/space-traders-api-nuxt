import { API_URL } from '~/constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';
import type { Meta } from '~/types/Meta';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetList = async <T>(endpoint: string, page?: number, limit?: number) => {
    requestErrorMessage.value = '';

    const params = new URLSearchParams();
    if (page) params.append('page', String(page));
    if (limit) params.append('limit', String(limit));

    const { data, error } = await useFetch<{ data: T[]; meta: Meta }>(
        `${API_URL}${endpoint}${params.toString() ? `?${params.toString()}` : ''}`,
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
            case 422:
                requestErrorMessage.value = 'Max limits 20';
                break;
            case 429:
                requestErrorMessage.value = 'Pārāk daudz pieprasījumu';
                break;
            default:
                requestErrorMessage.value = 'Kļūda iegūstot sarakstu';
                break;
        }
    }

    return {
        data: data.value?.data!,
        meta: data.value?.meta!,
    };
};
