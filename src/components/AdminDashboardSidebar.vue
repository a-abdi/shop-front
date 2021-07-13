<template>
    <div class="py-2 w-4/12 sm:w-32 xl:w-48 border-r-2 border-gray-200 bg-gray-50 text-gray-500 tracking-wide sm:tracking-wider">
        <div class="link">
            <router-link to="/admin/dashboard/users" class="">Users</router-link>
        </div>
        <div class="link">
            <router-link to="/admin/dashboard/products" class="">Products</router-link>
        </div>
        <div class="link">
            <router-link to="/admin/dashboard/categories" class="">Categories</router-link>
        </div>
        <div class="link">
            <router-link to="/admin/dashboard/carts" class="">Carts</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .link {
        @apply px-6 py-3 cursor-pointer hover:text-gray-900 hover:bg-green-50 tracking-wider;
    }
</style>