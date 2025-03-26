<template>
    <div>
        <NuxtLink
            to="/dashboard/system/map"
            class="mt-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
            Go to Map
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'dashboard',
});
</script>
