<template>
    <div class="py-2 w-4/12 sm:w-32 xl:w-48 border-r-2 border-gray-200 bg-gray-50 text-gray-500 tracking-wide sm:tracking-wider">
        <button class="btn-link" @click="goTo('/admin/dashboard/users')">Users</button>
        <button class="btn-link" @click="goTo('/admin/dashboard/products')">Products</button>
        <button class="btn-link" @click="goTo('/admin/dashboard/categories')">Categories</button>
        <button class="btn-link" @click="goTo('/admin/dashboard/carts')">Carts</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup () {
        const router = useRouter()

        const goTo = link => router.push(link)

        return {
            goTo
        }
    }
}
</script>

<style>
    .btn-link {
        @apply px-6 py-3 text-left w-full hover:text-white hover:shadow-lg hover:bg-green-300 tracking-wider focus:outline-none;
    }
</style>