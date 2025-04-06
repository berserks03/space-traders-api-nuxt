import type ErrorResponse from '~/types/ErrorResponse';

export const useNavigateMyShip = async (shipSymbol: string, waypointSymbol: string) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

    requestErrorMessage.value = '';
    
    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/navigate', {
        path: {
            shipSymbol: shipSymbol,
        },
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
        body: {
            waypointSymbol: waypointSymbol,
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
