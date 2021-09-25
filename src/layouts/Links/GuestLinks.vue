<template>
    <nav class="sticky top-0 bg-gray-100">
        <div class="w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-14">
                <div>
                    <router-link to="/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Home </router-link>
                </div>
                <div>
                    <router-link to="/register" class="text-gray-600 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Register </router-link>
                    
                    <router-link to="/login" class="text-gray-600 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Login </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>