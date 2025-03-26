<template>
    <div class="flex justify-between">
        <template v-if="userdata.ships.length < 1"> No ships <br /> </template>
        <div v-else class="flex">
            <div class="space-y-6">
                <!-- Iterate through ships and display each ship in a card -->
                <ShipCard v-for="ship in userdata.ships" :key="ship.symbol" :ship="ship" />
            </div>
        </div>
        <button
            class="m-auto mt-4  p-4 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
            Buy ship
        </button>
    </div>
</template>

<script lang="ts" setup>
import ShipCard from '~/components/ships/ShipCard.vue';
import { useGetMyShipsList } from '~/composables/ships/useGetMyShipsList';

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();

const { data, meta } = await useGetMyShipsList();
userdata.value.ships = data;
</script>
