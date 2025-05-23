<template>
    <div class="flex flex-wrap items-center justify-evenly min-h-screen bg-gray-100 py-8">
        <NuxtLink to="/" class="text-blue-500 underline absolute top-0">Atpakaļ uz sākumu</NuxtLink>
        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md flex-[1_0_100%]">
            <h2 class="text-2xl font-bold text-center mb-8 text-black">Reģistrācija</h2>
            <NuxtLink
                class="text-blue-500 underline"
                to="https://my.spacetraders.io/login"
                target="_blank"
            >
                Reģistrēties SpaceTraders portālā
            </NuxtLink>
            <div class="text-black">vai šeit</div>
            <input
                v-model="accountToken"
                @input="usernameErrorMessage = ''"
                type="text"
                placeholder="Konta Tokens"
                class="w-full px-4 py-2 border rounded text-black"
            />
            <input
                v-model="username"
                @input="
                    username = username.toUpperCase();
                    usernameErrorMessage = '';
                "
                type="text"
                placeholder="Lietotājvārds"
                class="w-full px-4 py-2 border rounded text-black"
            />

            <select
                id="faction"
                v-model="selectedFaction"
                :class="[
                    'block border px-3 py-2 rounded-md w-full',
                    selectedFaction === '' ? 'text-gray-400' : 'text-black',
                ]"
            >
                <option disabled selected value="">Organizācija</option>
                <option v-for="symbol in factionSymbols" :key="symbol" :value="symbol">
                    {{ symbol }}
                </option>
            </select>
            <button
                @click="handleRegister"
                class="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
                Reģistrēties
            </button>
            <div v-if="usernameErrorMessage" class="text-red-500 font-bold">
                {{ usernameErrorMessage }}
            </div>
        </div>

        <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md flex-[1_0_100%]">
            <h2 class="text-2xl font-bold text-center text-black">Autentifikācija</h2>
            <input
                v-model="agentToken"
                @input="tokenErrorMessage = ''"
                type="text"
                placeholder="Aģenta Tokens"
                class="w-full px-4 py-2 border rounded text-black"
            />
            <button
                @click="handleLogin()"
                class="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
                Pieteikties
            </button>
            <div v-if="tokenErrorMessage" class="text-red-500 font-bold">
                {{ tokenErrorMessage }}
            </div>
        </div>

        <div class="flex flex-col flex-[1_0_100%] items-center">
            <h3 class="mt-4 text-lg font-semibold text-black">Saglabātie lietotāji:</h3>

            <ul class="grid grid-flow-col-dense gap-4">
                <template v-if="isLoadingStoredUsers">
                    <li class="text-gray-500 italic">
                        <span>Loading... </span>
                        <svg
                            class="animate-spin h-5 w-5 text-gray-500 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                transform="rotate(180 12 12)"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                        </svg>
                    </li>
                </template>
                <template v-else-if="storedUsers.length">
                    <li v-for="(user, index) in storedUsers" :key="index">
                        <button
                            @click="handleLogin(user.token)"
                            class="w-full px-4 py-2 text-left bg-gray-200 rounded text-black hover:bg-gray-300"
                        >
                            {{ user.username }}
                        </button>
                    </li>
                </template>
                <template v-else>
                    <li class="text-black">N/A</li>
                </template>
            </ul>
            <button
                v-if="storedUsers.length"
                @click="clearStoredUsers"
                class="mt-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
            >
                Notīrīt
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useGetMyAgent } from '~/composables/agent/useGetMyAgent';
import { useGetFactionsArrayWithoutToken } from '~/composables/faction/useGetFactionsArrayWithoutToken';
import { useRegisterNewAgent } from '~/composables/global/useRegisterNewAgent';
import type { Faction, FactionSymbol } from '~/types/Faction';
import type LocalStorageUser from '~/types/LocalStorageData';

const isLoadingStoredUsers = ref(true);

const selectedFaction = ref<FactionSymbol | ''>('');
const { data } = await useGetFactionsArrayWithoutToken(1, 20);
const factionSymbols: FactionSymbol[] = data.value?.data.map((faction) => faction.symbol) ?? [];

const storedUsers = useState<LocalStorageUser[]>('storedUsers', () => []);

const userData = useUserData();

const accountToken = ref<string>('');
const username = ref<string>('');
const usernameErrorMessage = useUsernameErrorMessage();
usernameErrorMessage.value = '';

const handleRegister = async () => {
    const faction = selectedFaction.value !== '' ? selectedFaction.value : 'COSMIC';

    usernameErrorMessage.value = '';

    if (!username.value) {
        usernameErrorMessage.value = 'Lūdzu ievadiet lietotājvārdu.';
        return;
    }

    try {
        const userExists = storedUsers.value.some((user) => user.username === username.value);

        if (!userExists) {
            const newUserData = await useRegisterNewAgent(
                username.value,
                faction,
                accountToken.value
            );

            userData.value = {
                token: newUserData.token,
                agent: newUserData.agent,
                contracts: [newUserData.contract],
                faction: newUserData.faction,
                ships: newUserData.ships,
            };
            const newUser = { username: newUserData.agent.symbol, token: newUserData.token };
            const newUsers = [...storedUsers.value, newUser];
            storedUsers.value = newUsers;
            localStorage.setItem('SpaceTraders', JSON.stringify(newUsers));

            accountToken.value = '';
            username.value = '';
            navigateTo('/dashboard');
        } else {
            usernameErrorMessage.value = 'Lietotājs ar šo lietotājvārdu jau eksistē.';
        }
    } catch (err) {
        // usernameErrorMessage.value = `${err} Reģistrācijas laikā radās kļūda. Lūdzu, mēģiniet vēlreiz.`;
    }
};

const agentToken = useState('agentToken', () => '');
const tokenErrorMessage = useTokenErrorMessage();

const handleLogin = async (providedToken = agentToken.value) => {
    tokenErrorMessage.value = '';

    if (!providedToken) {
        tokenErrorMessage.value = 'Tokens ir obligāts.';
        return;
    }

    try {
        const tokenExists = storedUsers.value.some((user) => user.token === providedToken);

        const agent = await useGetMyAgent(providedToken);
        userData.value = {
            token: providedToken,
            agent: agent,
            contracts: [],
            faction: {} as Faction,
            ships: [],
        };

        if (!tokenExists) {
            const newUser = { username: agent.symbol, token: providedToken };
            const newUsers = [...storedUsers.value, newUser];
            storedUsers.value = newUsers;
            localStorage.setItem('SpaceTraders', JSON.stringify(newUsers));
        }

        agentToken.value = '';
        navigateTo('/dashboard');
    } catch (err) {
        // tokenErrorMessage.value = `${err} Ielogošanās laikā radās kļūda. Lūdzu, mēģiniet vēlreiz.`;
    }
};

const clearStoredUsers = () => {
    storedUsers.value = [];
    localStorage.removeItem('SpaceTraders');
};

onMounted(() => {
    const users = localStorage.getItem('SpaceTraders');
    if (users) {
        storedUsers.value = JSON.parse(users);
    }
    isLoadingStoredUsers.value = false;
});
</script>

<style></style>
