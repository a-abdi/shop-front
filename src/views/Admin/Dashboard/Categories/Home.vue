<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="table-tr">ID</th>
                    <th class="table-tr">Name</th>
                    <th class="table-tr" v-if="showDetails" >Description</th>
                    <th class="table-tr">Details</th>
                    <th class="table-tr">Edit</th>
                    <th class="table-tr">Delete</th>
                </tr>
            </thead>
            <tbody v-if="categories">
                <tr v-for="( category, index ) in categories.data" :key="category.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="table-td"> {{ category.id }} </td>
                    <td class="table-td"> {{ category.name }} </td>
                    <td class="table-td" v-if="showDetails"> {{ category.description }} </td>
                    <!-- <td class="td"> <router-link :to="`/admin/dashboard/categories/${category.id}`"  class="base-btn bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"> Details </router-link > </td> -->
                    <td class="table-td"> <button class="btn-blue" @click="showDetails = !showDetails"><span v-if="!showDetails">Show</span> <span v-if="showDetails">Hide</span> </button> </td>
                    <td class="table-td"> <button class="btn-yellow"> Edit </button> </td>
                    <td class="table-td"> <button class="btn-red" @click="deleteProduct(category.id)"> Delete </button> </td>
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