import { API_URL } from '~/constants/constants';
import type { Agent } from '~/types/Agent';
import type { Contract } from '~/types/Contract';
import type ErrorResponse from '~/types/ErrorResponse';
const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useAcceptContract = async (contractID: string) => {
    requestErrorMessage.value = '';

    const { data, error } = await useFetch<{ data: { agent: Agent; contract: Contract } }>(
        `${API_URL}my/contracts/${contractID}/accept`,
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
        requestErrorMessage.value = `Failed to accept contract: ${errorData.error.message}`;
    }

    if (data.value) {
        const acceptanceData = data.value.data;

        Object.assign(userdata.value.agent, acceptanceData.agent);

        const contractIndex = userdata.value.contracts.findIndex(
            (contract) => contract.id === contractID
        );

        if (contractIndex !== -1) {
            userdata.value.contracts.splice(contractIndex, 1, {
                ...userdata.value.contracts[contractIndex],
                ...acceptanceData.contract,
            });
        }
    }
};
