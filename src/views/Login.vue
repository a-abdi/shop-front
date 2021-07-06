<template>
    <div class="w-full flex items-center sm:mt-6 md:mt-10 lg:mt-14 xl:mt-18">
        <div class="mx-auto w-11/12 sm-w-9/12 md:w-7/12 lg:w-5/12 xl:w-1/3 border border-gray-200 rounded-lg shadow-md text-xs md:text-sm">
            <div class="border-b border-gray-200 p-2">
                Login
            </div>
            <div class="p-2 text-gray-600">
                <label for="email" class="">email</label>
                <input name="email" id="email" type="email" class="input">
            </div>
            <div class="p-2 text-gray-600">
                <label for="password" class="">password</label>
                <input name="password" id="password" type="password" class="input">
            </div>
            <div class="p-2">
                <button class="inline-flex px-3 py-1 text-gray-800 tracking-wide bg-blue-200 rounded-md focus:outline-none hover:bg-blue-300 focus:bg-blue-400 focus:ring-2 focus:ring-blue-500">Login</button>
            </div>
        </div>
    </div>
</template>

<style>
    .input {
        @apply w-full px-2 py-1 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-200;
    }
</style>