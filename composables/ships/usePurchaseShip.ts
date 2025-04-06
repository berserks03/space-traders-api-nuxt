import type ErrorResponse from '~/types/ErrorResponse';
import type { ShipType } from '~/types/Ship';

export const usePurchaseShip = async (shipType: ShipType, waypointSymbol: string) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

    requestErrorMessage.value = '';
    
    const { data, error } = await useSpacetraders('/my/ships', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
        body: {
            shipType: shipType,
            waypointSymbol: waypointSymbol,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }

    if (data.value) {
        const purchaseData = data.value.data;

        Object.assign(userdata.value.agent, purchaseData.agent);

        userdata.value.ships.push(purchaseData.ship);

        console.log(purchaseData.transaction); //TODO -> implement this
    }
};
