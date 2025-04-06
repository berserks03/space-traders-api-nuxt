import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useMyShipScanSystems = async (
    shipSymbol: string,
    amount: number,
    fromCargo: boolean
) => {
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/refuel', {
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
            units: amount,
            fromCargo: fromCargo,
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
