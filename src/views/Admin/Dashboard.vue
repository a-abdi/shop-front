<template>
    <div class="flex text-xs md:text-sm 2xl:text-base">
        <div class="mx-0.5 sm:mx-1 md:mx-1.5 lg:mx-2 xl:mx-2.5 2xl:mx-3 w-4/12 sm:w-2/12 xl:w-2/12 border border-gray-300 rounded-md shadow">
            <div class="bg-gray-200 text-base border-b border-gray-300 py-1 px-2 text-center">
                Sidebar
            </div>
            <div class="px-2 py-1.5 border-b border-gray-200 cursor-pointer hover:bg-blue-100 sm:tracking-wider">
                Users
            </div>
            <div class="px-2 py-1.5 border-b border-gray-200 cursor-pointer hover:bg-blue-100 sm:tracking-wider">
                Products
            </div>
            <div class="px-2 py-1.5 border-b border-gray-200 cursor-pointer hover:bg-blue-100 sm:tracking-wider">
                Categories
            </div>
            <div class="px-2 py-1.5 border-b border-gray-200 cursor-pointer hover:bg-blue-100 sm:tracking-wider">
                Carts
            </div>
        </div>
        <div>
            haaaaaaaaahhhahaha
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        
    }
}
</script>