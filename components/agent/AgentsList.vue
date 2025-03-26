<template>
    <div>
        <h2 class="mt-4 text-xl font-bold text-gray-800 mb-2 text-center">All Agents List</h2>

        <div>
            <span class="mr-4">Per page:</span>
            <select v-model="limit" class="border rounded" @change="updatePage(currentPage, limit)">
                <option v-for="i in 4" :key="i * 5" :value="i * 5">
                    {{ i * 5 }}
                </option>
            </select>
        </div>

        <div class="flex justify-between items-center">
            <button
                class="mt-4 p-4 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
                @click="updatePage(currentPage - 1)"
                :disabled="currentPage === 1"
            >
                Prev
            </button>

            <div class="flex gap-2 mx-2">
                <template v-for="page in totalPages">
                    <button
                        v-if="Math.abs(page - currentPage) <= 2"
                        :key="page"
                        class="px-4 py-2 rounded border"
                        :class="{
                            'bg-blue-600 text-white': currentPage === page,
                            'hover:bg-gray-200': currentPage !== page,
                        }"
                        @click="updatePage(page)"
                    >
                        {{ page }}
                    </button>
                </template>
            </div>

            <button
                class="mt-4 p-4 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
                @click="updatePage(currentPage + 1)"
                :disabled="!hasNextPage"
            >
                Next
            </button>
        </div>

        <div v-if="requestErrorMessage" class="text-center text-red-500 font-bold">
            {{ requestErrorMessage }}
        </div>
        <!-- <AgentCard v-for="agent in agentsData" :key="agent.symbol" :agent="agent" /> -->
        <ul v-else>
            <li v-for="agent in agentsData" :key="agent.symbol" class="py-2 text-center">
                {{ agent.symbol }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useGetAgentsList } from '~/composables/agent/useGetAgentsList';
import type { Agent } from '~/types/Agent';
import type { Meta } from '~/types/Meta';

const requestErrorMessage = useRequestErrorMessage();

const agentsData = ref<Agent[]>([]);
const metaData = ref<Meta>({
    total: 0,
    page: 1,
    limit: 10,
});

const currentPage = ref<number>(1);
const limit = ref<number>(10);

const fetchAgents = async (page: number, perPage: number) => {
    const data = await useGetAgentsList(page, perPage);
    if (data.data) {
        agentsData.value = data.data;
        metaData.value = data.meta;
    }
};

await fetchAgents(currentPage.value, limit.value);

const totalPages = computed(() => {
    return metaData.value ? Math.ceil(metaData.value.total / metaData.value.limit) : 1;
});

const hasNextPage = computed(() => currentPage.value < totalPages.value);

const updatePage = async (newPage: number, newLimit?: number) => {
    if (newLimit !== undefined && newLimit !== metaData.value?.limit) {
        limit.value = newLimit;
        // currentPage.value = 1;
        const maxPages = Math.ceil(metaData.value?.total / newLimit);
        if (currentPage.value > maxPages) {
            currentPage.value = maxPages;
        }
    } else if (newPage < 1 || newPage > totalPages.value || newPage === currentPage.value) {
        return;
    } else {
        currentPage.value = newPage;
    }

    await fetchAgents(currentPage.value, limit.value);
};
</script>
