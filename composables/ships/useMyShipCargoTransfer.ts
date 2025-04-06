import type ErrorResponse from '~/types/ErrorResponse';
import type { TradeSymbol } from '~/types/Ship';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useMyShipCargoTransfer = async (
    shipSymbol: string,
    tradeSymbol: TradeSymbol,
    amount: number,
    receivingShipSymbol: string
) => {
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/transfer', {
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
            tradeSymbol: tradeSymbol,
            units: amount,
            shipSymbol: receivingShipSymbol,
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
