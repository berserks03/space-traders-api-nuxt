<template>
    <span v-if="isPrimitive(data)">
        {{ data }}
    </span>

    <div v-else-if="Array.isArray(data)" class="ml-4 border-l pl-2 border-gray-300">
        <div v-for="(item, idx) in data" :key="idx" class="mb-2">
            <strong>Item {{ idx }}:</strong>
            <DataDisplay :data="item" />
        </div>
    </div>

    <div v-else-if="isObject(data)" class="ml-4 border-l pl-2 border-gray-300">
        <div v-for="(val, key) in data" :key="key" class="mb-2">
            <strong>{{ key }}:</strong>
            <DataDisplay :data="val" />
        </div>
    </div>

    <span v-else>
        {{ data }}
    </span>
</template>

<script setup lang="ts">
defineProps({
    data: {
        type: [Object, Array, String, Number, Boolean, null],
        default: null,
    },
});

function isPrimitive(val: any): boolean {
    return (
        val === null ||
        typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean'
    );
}

function isObject(val: any): boolean {
    return val !== null && !Array.isArray(val) && typeof val === 'object';
}
</script>
