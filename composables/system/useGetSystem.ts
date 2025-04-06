import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetSystem = async (systemSymbol: string) => {
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/systems/{systemSymbol}', {
        path: {
            systemSymbol: systemSymbol,
        },
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }
    

    return data.value?.data!;
};
