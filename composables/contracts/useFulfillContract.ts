import { API_URL } from '~/constants/constants';
import type ErrorResponse from '~/types/ErrorResponse';
import type { FulfillContractResponse } from '~/types/Responses';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useFulfillContract = async (contractID: string) => {
    requestErrorMessage.value = '';

    const { data, error } = await useFetch<FulfillContractResponse>(
        `${API_URL}my/contracts/${contractID}/fulfill`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${userdata.value.token}`,
            },
        }
    );

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        requestErrorMessage.value = `Failed to fulfill contract: ${errorData.error.message}`;
    }

    if (data.value) {
        const fulfillmentData = data.value.data;

        Object.assign(userdata.value.agent, fulfillmentData.agent);

        const contractIndex = userdata.value.contracts.findIndex(
            (contract) => contract.id === contractID
        );

        if (contractIndex !== -1) {
            userdata.value.contracts.splice(contractIndex, 1, {
                ...userdata.value.contracts[contractIndex],
                ...fulfillmentData.contract,
            });
        }
    }
};
