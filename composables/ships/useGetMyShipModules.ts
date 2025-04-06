import type ErrorResponse from '~/types/ErrorResponse';

export const useGetMyShipModules = async (shipSymbol: string) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();
    
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/modules', {
        path: {
            shipSymbol: shipSymbol,
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
