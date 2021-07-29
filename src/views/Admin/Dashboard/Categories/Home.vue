<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="tr">ID</th>
                    <th class="tr">Name</th>
                    <th v-if="showDetails" class="tr">Description</th>
                    <th class="tr">Details</th>
                    <th class="tr">Edit</th>
                    <th class="tr">Delete</th>
                </tr>
            </thead>
            <tbody v-if="categories">
                <tr v-for="( category, index ) in categories.data" :key="category.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="td"> {{ category.id }} </td>
                    <td class="td"> {{ category.name }} </td>
                    <td v-if="showDetails" class="td"> {{ category.description }} </td>
                    <!-- <td class="td"> <router-link :to="`/admin/dashboard/categories/${category.id}`"  class="base-btn bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"> Details </router-link > </td> -->
                    <td class="td"> <button @click="showDetails = !showDetails" class="base-btn bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"><span v-if="!showDetails">Show</span> <span v-if="showDetails">Hide</span> </button> </td>
                    <td class="td"> <button class="base-btn bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700"> Edit </button> </td>
                    <td class="td"> <button @click="deleteProduct(category.id)" class="base-btn bg-red-500 hover:bg-red-600 focus:bg-red-700"> Delete </button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    setup () {
        const store = useStore()
        const showDetails = ref(false)

        store.dispatch('adminCategories/getCategories')

        const deleteProduct = async (productId) => {
            const answer = window.confirm(
                'Do you really want to delete product?'
            )
            // try {
            //     if(answer) {
            //         await store.dispatch('adminProducts/deleteProduct', productId)
            //         store.dispatch('adminProducts/getProducts')
            //     } 
            // } catch (error) {
                
            // }
           
        }

        return {
            categories: computed ( () => store.getters['adminCategories/categories'] ),
            deleteProduct,
            showDetails
        }
    }
}
</script>

<style>
    .td {
        @apply py-3 px-2 border border-green-600 text-center;
    }

    .tr {
        @apply py-1 px-2 border border-green-600 text-center;
    }

    .base-btn {
        @apply py-1 px-2 focus:outline-none tracking-wide rounded-lg text-white;
    }

</style>