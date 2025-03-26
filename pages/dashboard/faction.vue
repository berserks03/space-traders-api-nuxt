<template>
    <div class="flex gap-4">
        <div class="w-1/2 p-4 bg-gray-50 rounded">
            <h2 class="text-xl font-bold mb-4">Your Faction</h2>
            <FactionCard :faction="userdata.faction" />
        </div>

        <div class="w-1/2 p-4 bg-gray-50 rounded">
            <h2 class="text-xl font-bold mb-2">Other Factions</h2>

            <select
                v-model="selectedSymbol"
                @change="handleFactionSelection"
                class="mb-4 p-2 border border-gray-300 rounded"
            >
                <option disabled value="">-- Select a faction --</option>
                <option v-for="faction in factions" :key="faction" :value="faction">
                    {{ faction }}
                </option>
            </select>

            <FactionCard v-if="selectedFaction" :faction="selectedFaction" />
            <div v-else>{{ requestErrorMessage }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Faction } from '~/types/Faction';
import FactionCard from '~/components/faction/FactionCard.vue';
import { useGetFactionData } from '~/composables/faction/useGetFactionData';
import { useGetFactionsList } from '~/composables/faction/useGetFactionsList';

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();
const requestErrorMessage = useRequestErrorMessage();

userdata.value.faction = await useGetFactionData(userdata.value.agent.startingFaction);

const factions = ref([
    'COSMIC',
    'VOID',
    'GALACTIC',
    'QUANTUM',
    'DOMINION',
    'ASTRO',
    'CORSAIRS',
    'OBSIDIAN',
    'AEGIS',
    'UNITED',
    'SOLITARY',
    'COBALT',
    'OMEGA',
    'ECHO',
    'LORDS',
    'CULT',
    'ANCIENTS',
    'SHADOW',
    'ETHEREAL',
]);
const factionsListData = await useGetFactionsList();
factions.value = factionsListData.data.map((faction) => faction.symbol);

const selectedSymbol = ref('');
const selectedFaction = ref<Faction | null>(null);

const handleFactionSelection = async () => {
    const data = await useGetFactionData(selectedSymbol.value);
    if (data) {
        selectedFaction.value = data;
    } else {
        selectedFaction.value = null;
    }
};
</script>
