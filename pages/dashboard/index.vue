<template>
    <div class="flex justify-between">
        <div class="ml-4 mt-[12rem]">
            <h2 class="mt-4 text-xl font-bold text-gray-800 mb-2">Your Agent Card</h2>
            <AgentCard :agent="userdata.agent" />
        </div>

        <AgentsList class="min-w-[450px]" />

        <SearchAgent class="w-[22rem] mr-4 mt-[12rem]" />
    </div>
</template>

<script lang="ts" setup>
import AgentsList from '~/components/agent/AgentsList.vue';
import SearchAgent from '~/components/agent/SearchAgent.vue';
import { useGetMyAgent } from '~/composables/agent/useGetMyAgent';

definePageMeta({
    layout: 'dashboard',
});

const userdata = useUserData();

userdata.value.agent = await useGetMyAgent();
</script>
