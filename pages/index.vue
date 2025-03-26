<script setup lang="ts">
import Ghost from '~/components/fun/Ghost/Ghost.vue';
import ColaGlass from '~/components/fun/ColaGlass/ColaGlass.vue';
import type { ServerStatusResponse } from '~/types/ServerStatusResponse';

const url = 'https://api.spacetraders.io/v2/';

const { data: serverStatusData, error } = await useLazyFetch<ServerStatusResponse>(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
});

if (error.value) {
    console.log(error);
}

const featureData = [
    {
        icon: '🪐',
        title: 'Atklāj visumu',
        description: 'Izpēti neskaitāmas planētas un zvaigžņu sistēmas.',
    },
    { icon: '🚀', title: 'Izveido floti', description: 'Pārvaldi un attīsti savu kuģu floti.' },
    {
        icon: '📈',
        title: 'Tirgojies un pelni',
        description: 'Pērc un pārdod resursus, lai kļūtu par galaktikas tirdzniecības magnātu.',
    },
];
</script>

<template>
    <div v-if="serverStatusData">
        <div
            title="A high-resolution, dark cosmic space background with stars, distant galaxies, and subtle nebula clouds"
            class="text-center py-24 px-5 bg-cover bg-center"
            :style="{
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/space-bg.webp)',
            }"
        >
            <h1 class="text-5xl m-0">Ienirsti kosmosa tirdzniecības pasaulē</h1>
            <p class="mt-2 mb-8 text-lg text-gray-300">
                Automatizē savu floti, izpēti kosmosu un apgūsti tirgošanās mākslu ar
                SpaceTraders.io API.
            </p>

            <PlayButton />
        </div>

        <section>
            <Ghost />
        </section>

        <section>
            <ColaGlass />
        </section>

        <section class="py-8 px-5 text-center">
            <ServerStatus :data="serverStatusData" />
        </section>

        <section class="py-16 px-5 text-center">
            <h2 class="text-2xl font-bold">Kas ir SpaceTraders?</h2>
            <div class="flex justify-around mt-8">
                <Feature
                    v-for="({ icon, title, description }, index) in featureData"
                    :key="index"
                    :icon="icon"
                    :title="title"
                    :description="description"
                />
            </div>
        </section>

        <Footer
            :announcements="serverStatusData.announcements"
            :links="serverStatusData.links"
            :description="serverStatusData.description"
        />
    </div>
    <div v-else>Loading ...</div>
</template>

<style scoped></style>
