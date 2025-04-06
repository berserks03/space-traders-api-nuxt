<template>
    <div>
        <h2 class="mt-4 text-xl font-bold text-gray-800 mb-2 text-right">Agent Search</h2>
        <input
            v-model="username"
            @input="
                username = username.toUpperCase();
                usernameErrorMessage = '';
            "
            type="text"
            placeholder="Lietotājvārds"
            class="w-full mt-4 p-2 border rounded text-black"
            @keyup.enter="handleUserSearch"
        />
        <button
            @click="handleUserSearch"
            class="w-full mt-4 p-4 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
            Meklēt
        </button>
        <div v-if="usernameErrorMessage" class="text-red-500 font-bold m-4">
            {{ usernameErrorMessage }}
        </div>

        <AgentCard class="w-full" v-if="agent" :agent="agent" />
    </div>
</template>

<script lang="ts" setup>
import { useSearchAgent } from '~/composables/agent/useGetSearchAgent';
import type { Agent } from '~/types/Agent';

const username = ref<string>('');

const usernameErrorMessage = useUsernameErrorMessage();

const agent = ref<Agent | null>(null);

const handleUserSearch = async () => {
    if (!username.value) {
        usernameErrorMessage.value = 'Lūdzu ievadiet lietotājvārdu.';
        return;
    }

    agent.value = null;

    try {
        agent.value = await useSearchAgent(username.value);
    } catch (err) {
        console.log(err);
    }
};
</script>
