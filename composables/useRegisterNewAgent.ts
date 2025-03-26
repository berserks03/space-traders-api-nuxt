import type ErrorResponse from '~/types/ErrorResponse';
import type RegisterResponse from '~/types/RegisterResponse';

export const useRegisterNewAgent = async (
    username: string,
    faction: string,
    accountToken: string
): Promise<RegisterResponse> => {
    const url = 'https://api.spacetraders.io/v2/register';

    const { data, error } = await useFetch<{ data: RegisterResponse }>(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${accountToken}`,
        },
        body: JSON.stringify({
            symbol: username,
            faction: faction,
        }),
    });
    
    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        const usernameErrorMessage = useUsernameErrorMessage();
        usernameErrorMessage.value = `Failed to register new user: ${errorData.error.message}`;
    }

    return data.value?.data!;
};
