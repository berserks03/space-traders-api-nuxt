<template>
    <template v-if="userdata.contracts && userdata.contracts.length < 1">
        <div>No Contracts</div>
        Get contract with ship
        <select v-model="selectedShip" class="mb-4 p-2 border border-gray-300 rounded">
            <option v-for="ship in userdata.ships" :key="ship.symbol" :value="ship.symbol">
                {{ ship.symbol }}
            </option>
        </select>
        <button
            class="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 disabled:bg-slate-300"
            @click="handleNegotiateContract"
        >
            Get
        </button>
    </template>

    <template v-else>
        <ContractCard
            v-for="contract in userdata.contracts"
            :key="contract.id"
            :contract="contract"
            :fulfillContract="useFulfillContract"
            :deliverContract="useDeliverCargoToContract"
            :acceptContract="useAcceptContract"
        />
    </template>
</template>

<script lang="ts" setup>
import ContractCard from '~/components/contracts/ContractCard.vue';
import { useGetMyContractsList } from '~/composables/contracts/useGetMyContractsList';
import { useAcceptContract } from '~/composables/contracts/useAcceptContract';
import { useDeliverCargoToContract } from '~/composables/contracts/useDeliverCargoToContract';
import { useFulfillContract } from '~/composables/contracts/useFulfillContract';
import { useGetMyShipsList } from '~/composables/ships/useGetMyShipsList';
import { useMyShipNegotiateContract } from '~/composables/ships/useMyShipNegotiateContract';

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();

const { data: ContractsData } = await useGetMyContractsList();
userdata.value.contracts = ContractsData;
const { data: shipsData } = await useGetMyShipsList();
userdata.value.ships = shipsData;

const selectedShip = ref(userdata.value.ships[0]?.symbol || '');

const handleNegotiateContract = async () => {
    const { contract } = await useMyShipNegotiateContract(selectedShip.value);
    userdata.value.contracts = [contract];
};
</script>
