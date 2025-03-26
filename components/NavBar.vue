<template>
    <nav class="bg-gray-800 p-4 flex justify-between">
        <div class="flex space-x-4">
            <NuxtLink
                v-for="tab in tabs"
                :key="tab.name"
                :to="tab.href"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                {{ tab.name }}
            </NuxtLink>
        </div>
        <div class="px-3 py-2 rounded-md text-sm font-medium text-gray-300">
            {{ `${agent.symbol} Credits: ${agent.credits}` }}
        </div>
        <div class="flex space-x-4">
            <NuxtLink
                to="/authorize"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
                Logout
            </NuxtLink>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import type { Agent } from '~/types/Agent';


const tabs = [
    { name: 'Agent', href: '/dashboard' },
    { name: 'Contracts', href: '/dashboard/contracts' },
    { name: 'Faction', href: '/dashboard/faction' },
    { name: 'Ships', href: '/dashboard/ships' },
    { name: 'System', href: '/dashboard/system' },
];

defineProps<{ agent: Agent }>();
</script>
