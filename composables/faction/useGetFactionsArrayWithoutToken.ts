export const useGetFactionsArrayWithoutToken = async (page?: number, limit?: number) => {
    const { $spacetraders } = useNuxtApp();

    return await useAsyncData('factions-array', () =>
        $spacetraders('/factions', {
            params: {
                ...(page && { page }),
                ...(limit && { limit }),
            },
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
    );
};
