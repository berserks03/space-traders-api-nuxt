<template>
    <div class="w-48 text-center">
        <span class="text-4xl">{{ icon }}</span>
        <h3 class="mt-2 text-xl">{{ title }}</h3>
        <p class="text-gray-400">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import type { FeatureProps } from '~/types/ComponentProps';

defineProps<FeatureProps>();
</script>
