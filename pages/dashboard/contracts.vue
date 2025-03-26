<template>
    <template v-if="userdata.contracts.length < 1"> No contracts <br /> </template>
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

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();

const { data } = await useGetMyContractsList();
userdata.value.contracts = data;
</script>
