import type ErrorResponse from '~/types/ErrorResponse';
import type { Survey } from '~/types/Ship';

export const useMyShipExtractWithSurvey = async (shipSymbol: string, survey: Survey) => {
    const userdata = useUserData();
    const requestErrorMessage = useRequestErrorMessage();

    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders('/my/ships/{shipSymbol}/extract', {
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
            survey: survey,
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
