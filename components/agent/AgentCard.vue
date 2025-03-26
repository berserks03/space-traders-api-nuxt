<template>
    <div class="text-left mt-4 p-4 bg-gray-100 shadow-lg rounded-lg border border-black">    
        <div v-if="agent.accountId" class="mb-2">
            <span class="font-semibold">Account ID:</span> {{ agent.accountId }}
        </div>
        <div class="mb-2"><span class="font-semibold">Name:</span> {{ agent.symbol }}</div>
        <div class="mb-2">
            <span class="font-semibold">Headquarters coordinations:</span>
            {{ agent.headquarters }}
        </div>
        <div class="mb-2"><span class="font-semibold">Available credits:</span> {{ agent.credits }}</div>
        <div class="mb-2">
            <span class="font-semibold">Starting Faction:</span>
            {{ agent.startingFaction }}
        </div>
        <div class="mb-2"><span class="font-semibold">Ship Count:</span> {{ agent.shipCount }}</div>
    </div>
</template>

<script lang="ts" setup>
import type { Agent } from '~/types/Agent';


defineProps<{ agent: Agent }>();
</script>
