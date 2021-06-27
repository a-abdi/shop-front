<template>
    <div class="flex justify-center items-center h-screen bg-white-100">
        <div class="bg-blue-200 rounded-lg p-4 text-purple-600">
            <svg class="animate-spin h-8 w-8 mr-3 inline-flex"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span><slot></slot></span>
        </div>
    </div>
</template>