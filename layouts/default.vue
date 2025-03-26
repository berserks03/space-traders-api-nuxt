<script setup lang="ts">
useHead({
    title: 'SpaceTraders - Kosmosa Tirdzniecība',
    meta: [
        {
            name: 'description',
            content: 'Automatizē floti, tirgojies un izpēti kosmosu ar SpaceTraders.io API.',
        },
    ],
});
</script>

<template>
    <div class="antialiased m-0 bg-[#0a0a23] text-white select-none">
        <slot />
    </div>
</template>

<style scoped></style>
