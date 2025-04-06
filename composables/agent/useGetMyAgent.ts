import type ErrorResponse from '~/types/ErrorResponse';

export const useGetMyAgent = async (token?: string) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();
    const tokenErrorMessage = useTokenErrorMessage();
    
    requestErrorMessage.value = '';
    tokenErrorMessage.value = '';

    const { data, error } = await useSpacetraders(`/my/agent`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token ? token : userdata.value.token}`,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
        tokenErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }

    return data.value?.data!;
};
