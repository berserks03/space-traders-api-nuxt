import type ErrorResponse from '~/types/ErrorResponse';

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

export const useGetConstructionSite = async (systemSymbol: string, waypointSymbol: string) => {
    requestErrorMessage.value = '';

    const { data, error } = await useSpacetraders(
        '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction',
        {
            path: {
                systemSymbol: systemSymbol,
                waypointSymbol: waypointSymbol,
            },
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${userdata.value.token}`,
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
