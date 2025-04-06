import type ErrorResponse from '~/types/ErrorResponse';
import type { ShipModuleSymbol } from '~/types/Ship';

export const useMyShipModuleInstall = async (shipSymbol: string, mountSymbol: ShipModuleSymbol) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/modules/install', {
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
            symbol: mountSymbol,
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
