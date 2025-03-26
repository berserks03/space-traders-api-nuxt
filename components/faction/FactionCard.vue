<template>
    <div class="p-4 m-4 bg-white rounded shadow-lg max-w-4xl">
        <div class="mb-4">
            <h2 class="text-2xl font-bold text-gray-800">
                {{ faction.name }}
                <span class="text-gray-500 text-lg">({{ faction.symbol }})</span>
            </h2>
        </div>

        <p class="text-gray-700 mb-4">
            {{ faction.description }}
        </p>

        <div class="mb-2">
            <span class="font-semibold text-gray-700">Headquarters:</span>
            {{ faction.headquarters }}
        </div>

        <div class="mb-4">
            <span class="font-semibold text-gray-700">Recruiting:</span>
            <span v-if="faction.isRecruiting" class="ml-1 text-green-600 font-bold"> Yes </span>
            <span v-else class="ml-1 text-red-600 font-bold"> No </span>
        </div>

        <h3 class="text-lg font-semibold mb-2 text-gray-800">Traits</h3>
        <ul class="list-disc list-inside space-y-2">
            <li v-for="trait in faction.traits" :key="trait.symbol">
                <strong>{{ trait.name }} ({{ trait.symbol }})</strong>:
                <span class="text-gray-700">{{ trait.description }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { Faction } from '~/types/Faction';


defineProps<{
    faction: Faction
}>();
</script>

<style></style>
