<template>
    <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Ship Header -->
        <div class="p-4 border-b bg-gray-50">
            <h2 class="text-xl font-bold text-gray-800">
                {{ ship.symbol }}
                <span class="text-sm text-gray-500">({{ ship.registration.role }})</span>
            </h2>
            <p class="text-sm text-gray-600">Faction: {{ ship.registration.factionSymbol }}</p>
        </div>

        <!-- Tabs Section -->
        <div>
            <!-- Tabs -->
            <nav class="flex border-b">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    :class="[
                        activeTab === tab.id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-600',
                        'px-4 py-2 border-b-2 font-medium text-sm hover:text-blue-500 hover:border-blue-500',
                    ]"
                >
                    {{ tab.name }}
                </button>
            </nav>

            <!-- Tab Content -->
            <div class="p-4">
                <!-- Navigation -->
                <div v-if="activeTab === 'navigation'">
                    <p><strong>System:</strong> {{ ship.nav.systemSymbol }}</p>
                    <p><strong>Waypoint:</strong> {{ ship.nav.waypointSymbol }}</p>
                    <p><strong>Flight Mode:</strong> {{ ship.nav.flightMode }}</p>
                    <p><strong>Status:</strong> {{ ship.nav.status }}</p>
                    <p>
                        <strong>Departure:</strong>
                        {{ formatDate(ship.nav.route.departureTime) }}
                    </p>
                    <p><strong>Arrival:</strong> {{ formatDate(ship.nav.route.arrival) }}</p>
                </div>

                <!-- Crew -->
                <div v-if="activeTab === 'crew'">
                    <p><strong>Current:</strong> {{ ship.crew.current }}</p>
                    <p><strong>Capacity:</strong> {{ ship.crew.capacity }}</p>
                    <p><strong>Required:</strong> {{ ship.crew.required }}</p>
                    <p><strong>Morale:</strong> {{ ship.crew.morale }}</p>
                    <p><strong>Rotation:</strong> {{ ship.crew.rotation }}</p>
                </div>

                <!-- Fuel -->
                <div v-if="activeTab === 'fuel'">
                    <p><strong>Current:</strong> {{ ship.fuel.current }}</p>
                    <p><strong>Capacity:</strong> {{ ship.fuel.capacity }}</p>
                    <p><strong>Consumed:</strong> {{ ship.fuel.consumed?.amount }}</p>
                </div>

                <!-- Modules -->
                <div v-if="activeTab === 'modules'">
                    <ul class="list-disc list-inside">
                        <li v-for="module in ship.modules" :key="module.symbol">
                            <p>
                                <strong>{{ module.name }}</strong
                                >: {{ module.description }}
                            </p>
                        </li>
                    </ul>
                </div>

                <!-- Mounts -->
                <div v-if="activeTab === 'mounts'">
                    <ul class="list-disc list-inside">
                        <li v-for="mount in ship.mounts" :key="mount.symbol">
                            <p>
                                <strong>{{ mount.name }}</strong
                                >: {{ mount.description }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Ship } from '~/types/Ship';


defineProps<{
    ship: Ship;
}>();

const tabs = [
    { id: 'navigation', name: 'Navigation' },
    { id: 'crew', name: 'Crew' },
    { id: 'fuel', name: 'Fuel' },
    { id: 'modules', name: 'Modules' },
    { id: 'mounts', name: 'Mounts' },
];

// Reactive state for the active tab
const activeTab = ref('navigation');
</script>
