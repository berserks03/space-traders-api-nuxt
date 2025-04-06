<template>
    <div class="flex flex-col items-center space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">{{ systemData.symbol }} Map</h2>
        <p class="text-gray-600">
            Sector: {{ systemData.sectorSymbol }} | Type: {{ systemData.type }}
        </p>

        <!-- Canvas for visualization -->
        <canvas
            ref="canvas"
            class="border border-gray-300 shadow"
            :width="canvasWidth"
            :height="canvasHeight"
        ></canvas>

        <!-- Legend -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(value, key) in typeColors" class="flex items-center space-x-2">
                <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: value }"></div>
                <span class="text-sm text-gray-600">{{ formatString(key as string) }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useGetSystem } from '~/composables/system/useGetSystem';

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();
const systemData = useSystemData();

systemData.value = await useGetSystem(getSystemFromWaypoint(userdata.value.agent.headquarters))

const formatString = (str: string): string => {
    return str
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Canvas dimensions
const canvasWidth = 1800;
const canvasHeight = 1800;

// Reference for the canvas
const canvas = ref<HTMLCanvasElement | null>(null);

// Define min/max coordinates
const minX = Math.min(...systemData.value.waypoints.map((wp) => wp.x)) - 50;
const maxX = Math.max(...systemData.value.waypoints.map((wp) => wp.x)) + 50;
const minY = Math.min(...systemData.value.waypoints.map((wp) => wp.y)) - 50;
const maxY = Math.max(...systemData.value.waypoints.map((wp) => wp.y)) + 50;

// Map point types to colors
const typeColors: { [key: string]: string } = {
    PLANET: '#3b82f6',
    GAS_GIANT: '#14b8a6',
    MOON: '#22c55e',
    ORBITAL_STATION: '#ef4444',
    JUMP_GATE: '#a855f7',
    ASTEROID_FIELD: '#f97316',
    ASTEROID: '#eab308',
    ENGINEERED_ASTEROID: '#b59410',
    ASTEROID_BASE: '#895129',
    NEBULA: '#ec4899',
    DEBRIS_FIELD: '#6b7280',
    GRAVITY_WELL: '#06b6d4',
    ARTIFICIAL_GRAVITY_WELL: '#0ea5e9',
    FUEL_STATION: '#84cc16',
};

// Scale function to map space coordinates to canvas coordinates
const scale = (
    value: number,
    minInput: number,
    maxInput: number,
    minOutput: number,
    maxOutput: number
) => {
    return ((value - minInput) / (maxInput - minInput)) * (maxOutput - minOutput) + minOutput;
};

// Draw the map
const drawMap = () => {
    if (!canvas.value) return;
    const ctx = canvas.value.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw each waypoint
    systemData.value.waypoints.forEach((waypoint) => {
        const canvasX = scale(waypoint.x, minX, maxX, 0, canvasWidth);
        const canvasY = scale(waypoint.y, minY, maxY, canvasHeight, 0); // Invert Y-axis for top-down orientation

        // Set color based on type
        ctx.fillStyle = typeColors[waypoint.type] || 'gray';

        // Draw point
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw label
        ctx.font = '10px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(waypoint.symbol, canvasX + 8, canvasY - 8);
    });
};

// Run drawMap on component mount
onMounted(() => {
    drawMap();
});
</script>

<style>
canvas {
    background-color: #f9fafb;
}
</style>
