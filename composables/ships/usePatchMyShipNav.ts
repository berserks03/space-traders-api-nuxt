import type ErrorResponse from '~/types/ErrorResponse';
import type { NavMode } from '~/types/Ship';

export const usePatchMyShipNav = async (shipSymbol: string, flightMode: NavMode) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

    requestErrorMessage.value = '';
    
    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/nav', {
        path: {
            shipSymbol: shipSymbol,
        },
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
        body: {
            flightMode: flightMode,
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
