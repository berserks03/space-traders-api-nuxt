import type ErrorResponse from '~/types/ErrorResponse';

export const useSearchAgent = async (agentName: string) => {
    const userdata = useUserData();
    const usernameErrorMessage = useUsernameErrorMessage();

    usernameErrorMessage.value = '';

    const { data, error } = await useSpacetraders(`/agents/{agentSymbol}`, {
        path: {
            agentSymbol: agentName,
        },
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${userdata.value.token}`,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        usernameErrorMessage.value = `${getErrorText(errorData.error.code)}: ${errorData.error.message}`;
    }

    return data.value?.data!;
};
