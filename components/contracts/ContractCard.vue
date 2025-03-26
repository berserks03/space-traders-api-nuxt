<template>
    <div class="max-w-md m-4 p-4 bg-gray-100 shadow-lg rounded-lg text-left">
        <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b">
                <h2 class="text-xl font-bold text-gray-800">Contract</h2>
                <p class="text-sm text-gray-500 mt-1">
                    ID: <span class="italic">{{ contract.id }}</span>
                </p>
            </div>

            <!-- Contract Details -->
            <div class="px-6 py-4 grid grid-cols-2 gap-y-4">
                <div>
                    <span class="font-semibold">Faction: </span>
                    <span>{{ contract.factionSymbol }}</span>
                </div>
                <div>
                    <span class="font-semibold">Type: </span>
                    <span>{{ contract.type }}</span>
                </div>

                <!-- Accepted and Fulfilled -->
                <div>
                    <span class="font-semibold">Accepted: </span>
                    <span
                        :class="
                            contract.accepted
                                ? 'text-green-600 font-bold'
                                : 'text-red-600 font-bold'
                        "
                    >
                        {{ contract.accepted ? 'Yes' : 'No' }}
                    </span>
                </div>
                <div>
                    <span class="font-semibold">Fulfilled: </span>
                    <span
                        :class="
                            contract.fulfilled
                                ? 'text-green-600 font-bold'
                                : 'text-red-600 font-bold'
                        "
                    >
                        {{ contract.fulfilled ? 'Yes' : 'No' }}
                    </span>
                </div>

                <!-- Deadlines -->
                <div class="col-span-2">
                    <span class="font-semibold">Deadline to Accept: </span>
                    <span class="text-gray-600">{{
                        formatDate(contract.deadlineToAccept ?? '')
                    }}</span>
                </div>
                <div class="col-span-2">
                    <span class="font-semibold">Expiration: </span>
                    <span class="text-gray-600">{{ formatDate(contract.expiration) }}</span>
                </div>
            </div>

            <!-- Contract Terms -->
            <div class="px-6 py-4 bg-gray-50 border-t">
                <h3 class="text-lg font-semibold mb-2">Contract Terms</h3>

                <!-- Deadline -->
                <div class="mb-2">
                    <span class="font-semibold">Deadline: </span>
                    <span>{{ formatDate(contract.terms.deadline) }}</span>
                </div>

                <!-- Payment -->
                <div class="mb-2 grid grid-cols-2">
                    <div>
                        <span class="font-semibold">Payment on Accepted: </span>
                        <span>{{ contract.terms.payment.onAccepted }}</span>
                    </div>
                    <div>
                        <span class="font-semibold">Payment on Fulfilled: </span>
                        <span>{{ contract.terms.payment.onFulfilled }}</span>
                    </div>
                </div>

                <!-- Deliver Section -->
                <h4 class="font-medium text-gray-800 mt-4 mb-2">Deliver</h4>
                <div class="grid gap-4">
                    <!-- Iterate through deliver items -->
                    <div
                        v-for="(item, index) in contract.terms.deliver"
                        :key="index"
                        class="p-4 bg-gray-100 border border-gray-200 rounded shadow-sm"
                    >
                        <div class="flex justify-between mb-2">
                            <strong>Trade Symbol:</strong>
                            <span>{{ item.tradeSymbol }}</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <strong>Destination:</strong>
                            <span>{{ item.destinationSymbol }}</span>
                        </div>
                        <div class="flex justify-between mb-2">
                            <strong>Units Required:</strong>
                            <span>{{ item.unitsRequired }}</span>
                        </div>
                        <div class="flex justify-between">
                            <strong>Units Fulfilled:</strong>
                            <span>{{ item.unitsFulfilled }}</span>
                        </div>

                        <div class="flex gap-2 my-4 justify-between">
                            <button
                                class="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:bg-slate-300"
                                @click="acceptContract(contract.id)"
                                :disabled="contract.accepted"
                            >
                                Accept
                            </button>
                            <button
                                class="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
                                @click="deliverContract(contract.id)"
                                :disabled="!contract.accepted || contract.fulfilled"
                            >
                                Deliver
                            </button>
                            <button
                                class="px-4 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 disabled:bg-slate-300"
                                @click="fulfillContract(contract.id)"
                                :disabled="contract.fulfilled || item.unitsRequired > 0"
                            >
                                Fulfill
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Contract } from '~/types/Contract';


defineProps<{
    contract: Contract;
    fulfillContract: (id: string) => void;
    deliverContract: (id: string) => void;
    acceptContract: (id: string) => void;
}>();
</script>
