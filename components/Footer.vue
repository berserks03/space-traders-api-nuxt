<template>
    <!-- Announcements Section -->
    <section class="py-16 px-5 bg-gray-800 text-gray-200">
        <h2 class="text-3xl font-bold text-center text-white mb-8">Description</h2>
        <div
            class="bg-gray-700 p-6 mb-8 rounded-lg shadow-md border border-gray-600 hover:shadow-lg transition-shadow"
        >
            {{ description }}
        </div>
        <h2 class="text-3xl font-bold text-center text-white mb-8">Announcements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="(announcement, index) in announcements"
                :key="index"
                class="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:shadow-lg transition-shadow"
            >
                <h3 class="text-xl font-semibold text-green-400 mb-4">
                    {{ announcement.title }}
                </h3>
                <p class="text-gray-300">{{ announcement.body }}</p>
            </div>
        </div>
    </section>

    <!-- Links Section -->
    <section class="py-8 px-5 bg-gray-900 text-gray-300">
        <h2 class="text-xl font-bold text-center text-white mb-8">Useful Links</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <NuxtLink
                v-for="(link, index) in links"
                :key="index"
                :to="link.url"
                class="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
                <span class="text-blue-400 text-xl">🔗</span>
                <span class="text-white font-medium hover:underline">
                    {{ link.name }}
                </span>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { FooterProps } from '~/types/ComponentProps';

defineProps<FooterProps>();
</script>
