export const useGetSystemStatus = async () => {
    const { $spacetraders } = useNuxtApp();

    return await useAsyncData('system-status', () =>
        $spacetraders('/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
    );
};
