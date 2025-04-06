import type ErrorResponse from '~/types/ErrorResponse';

export const useSupplyConstructionSite = async (
    systemSymbol: string,
    waypointSymbol: string,
    shipSymbol: string,
    tradeSymbol: string,
    amount: number
) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();
    
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders(
        '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply',
        {
            path: {
                systemSymbol: systemSymbol,
                waypointSymbol: waypointSymbol,
            },
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userdata.value.token}`,
            },
            body: {
                shipSymbol: shipSymbol,
                tradeSymbol: tradeSymbol,
                units: amount,
            },
        }
    );

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }

    return data.value?.data!;
};
