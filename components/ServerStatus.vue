<template>
    <div class="bg-gray-800 text-white p-6 rounded-lg mt-6 shadow-lg">
        <h2 class="text-2xl font-semibold text-green-400">SpaceTraders Servera Statuss</h2>
        <p><strong>Statuss:</strong> {{ data.status }}</p>
        <p><strong>Versija:</strong> {{ data.version }}</p>
        <p>
            <strong>Atiestatīšanas datums:</strong>
            {{ formatDate(data.resetDate) }}
        </p>
        <p>
            <strong>Nākamā atiestatīšana:</strong>
            {{ formatDate(data.serverResets.next) }}
        </p>
        <p>
            <strong>Atiestatīšanas biežums:</strong>
            {{ data.serverResets.frequency.replace(/-/g, ' ') }}
        </p>

        <hr class="my-4 border-gray-600" />

        <div class="mt-6">
            <h3 class="text-xl font-semibold text-blue-400 flex items-center justify-center">
                <span class="mr-2">📊</span> Statistika
            </h3>
            <p><strong>Aģenti:</strong> {{ data.stats.agents }}</p>
            <p><strong>Kuģi:</strong> {{ data.stats.ships }}</p>
            <p><strong>Sistēmas:</strong> {{ data.stats.systems }}</p>
            <p><strong>Navigācijas punkti:</strong> {{ data.stats.waypoints }}</p>
        </div>

        <hr class="my-4 border-gray-600" />

        <div class="mt-6">
            <h3 class="text-xl font-semibold text-blue-400 flex items-center justify-center">
                <span class="mr-2">🏆</span> Labākie pēc kredītiem
            </h3>
            <ul class="list-none mt-2 space-y-2">
                <li
                    v-for="entry in data.leaderboards.mostCredits.slice(0, 3)"
                    :key="entry.agentSymbol"
                    class="bg-gray-700 p-2 rounded shadow-sm justify-center"
                >
                    <strong class="text-white">{{ entry.agentSymbol }}</strong
                    >: {{ entry.credits.toLocaleString() }} kredīti
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ServerStatusProps } from '~/types/ComponentProps';

defineProps<ServerStatusProps>();
</script>
