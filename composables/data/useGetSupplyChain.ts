export const useGetSupplyChain = async () => {
    const { $spacetraders } = useNuxtApp();

    return await useAsyncData('supply-chain', () =>
        $spacetraders('/market/supply-chain', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
    );
};
