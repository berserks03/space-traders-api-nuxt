import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useDeliverCargoToContract = async (contractID: string, shipSymbol: string, tradeSymbol: string, amount: number) => {
    requestErrorMessage.value = '';    

    const { data, error } = await useSpacetraders('/my/contracts/{contractId}/deliver', {
        path: {
            contractId: contractID,
        },
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
        body: {
            shipSymbol: shipSymbol,
            tradeSymbol: tradeSymbol,
            units: amount,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `Failed to deliver to contract: ${errorData.error.message}`;
    }

    if (data.value) {
        const deliveryData = data.value.data;

        const contractIndex = userdata.value.contracts.findIndex(
            (contract) => contract.id === contractID
        );

        if (contractIndex !== -1) {
            userdata.value.contracts.splice(contractIndex, 1, {
                ...userdata.value.contracts[contractIndex],
                ...deliveryData.contract,
            });
        }

        const shipIndex = userdata.value.ships.findIndex(
            (ship) => ship.symbol === shipSymbol
        );

        if (shipIndex !== -1 && userdata.value.ships[shipIndex]) {
            userdata.value.ships[shipIndex].cargo = {
                capacity: deliveryData.cargo.capacity,
                units: deliveryData.cargo.units,
                inventory: [...deliveryData.cargo.inventory],
              };
        }

        //TODO -> test delivery
    }
};
