<template>
    <DashboardIndex>
        <template #search>
            Search
        </template>
        <template #create>
            <router-link to="/admin/dashboard/products/create" class="my-auto px-2 py-1 rounded-md tracking-wider text-white hover:bg-blue-400">Create Product</router-link>
        </template>
    </DashboardIndex>
</template>

<script>
import DashboardIndex from '../../../../components/AdminDashboardContentIndex.vue'

export default {
    components: {
        DashboardIndex
    },

    setup () {

    }
}
</script>