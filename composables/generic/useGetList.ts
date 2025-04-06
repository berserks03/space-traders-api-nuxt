import { API_URL } from '~/constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';
import type { Meta } from '~/types/Meta';

export const useGetList = async <T>(endpoint: string, page?: number, limit?: number) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

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
        requestErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }

    return {
        data: data.value?.data!,
        meta: data.value?.meta!,
    };
};
