import type ErrorResponse from '~/types/ErrorResponse';
import type { FactionSymbol } from '~/types/Faction';

export const useRegisterNewAgent = async (
    username: string,
    faction: FactionSymbol,
    accountToken: string
) => {
    const usernameErrorMessage = useUsernameErrorMessage();
    usernameErrorMessage.value = '';
    
    const { data, error } = await useSpacetraders('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${accountToken}`,
        },
        body: {
            faction: faction,
            symbol: username,
        },
    });

    if (error.value) {
        const errorData = error.value.data as unknown as { error: ErrorResponse };
        usernameErrorMessage.value = `${getErrorText(errorData.error.code)}: ${
            errorData.error.message
        }`;
    }

    return data.value?.data!;
};
