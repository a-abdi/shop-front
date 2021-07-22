<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="tr">Id</th>
                    <th class="tr">Name</th>
                    <th class="tr">Category</th>
                    <th class="tr">Price</th>
                    <th class="tr">Discount</th>
                    <th class="tr">Quantity</th>
                    <th class="tr">Details</th>
                    <th class="tr">Edit</th>
                    <th class="tr">Delete</th>
                </tr>
            </thead>
            <tbody v-if="products">
                <tr v-for="( product, index ) in products.data" :key="product.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="td"> {{ product.id }} </td>
                    <td class="td truncate"> {{ product.name }} </td>
                    <td class="td"> {{ product.category.name }} </td>
                    <td class="td"> <Currency :money="product.price" /> </td>
                    <td class="td"> <Currency :money="product.discount" /> </td>
                    <td class="td"> {{ product.quantity }} </td>
                    <td class="td"> <router-link :to="`/admin/dashboard/products/${product.id}`"  class="base-btn bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"> Details </router-link > </td>
                    <td class="td"> <button class="base-btn bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-700"> Edit </button> </td>
                    <td class="td"> <button class="base-btn bg-red-500 hover:bg-red-600 focus:bg-red-700"> Delete </button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Currency from '../../../../components/Currency.vue'

export default {
    components: {
        Currency
    },

    setup () {
        const store = useStore()

        store.dispatch('adminProducts/getProducts')

        return {
            products: computed ( () => store.getters['adminProducts/products'] ),
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