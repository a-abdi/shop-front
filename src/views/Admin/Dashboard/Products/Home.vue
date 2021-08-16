<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="table-tr">ID</th>
                    <th class="table-tr">Name</th>
                    <th class="table-tr">Category</th>
                    <th class="table-tr">Price</th>
                    <th class="table-tr">Discount</th>
                    <th class="table-tr">Quantity</th>
                    <th class="table-tr">Details</th>
                    <th class="table-tr">Edit</th>
                    <th class="table-tr">Delete</th>
                </tr>
            </thead>
            <tbody v-if="products">
                <tr v-for="( product, index ) in products.data" :key="product.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="table-td"> {{ product.id }} </td>
                    <td class="table-td"> {{ product.name }} </td>
                    <td class="table-td"> {{ product.category.name }} </td>
                    <td class="table-td"> <Currency :money="product.price" /> </td>
                    <td class="table-td"> <Currency :money="product.discount" /> </td>
                    <td class="table-td"> {{ product.quantity }} </td>
                    <td class="table-td"> <router-link :to="`/admin/dashboard/products/${product.id}`"  class="btn-blue"> Details </router-link > </td>
                    <td class="table-td"> <router-link :to="`/admin/dashboard/products/${product.id}/edit`" class="btn-yellow"> Edit </router-link> </td>
                    <td class="table-td"> <button @click="deleteProduct(product.id)" class="btn-red"> Delete </button> </td>
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

        const deleteProduct = async (productId) => {
            const answer = window.confirm(
                'Do you really want to delete product?'
            )
            try {
                if(answer) {
                    await store.dispatch('adminProducts/deleteProduct', productId)
                    store.dispatch('adminProducts/getProducts')
                } 
            } catch (error) {
                
            }
        }

        return {
            products: computed ( () => store.getters['adminProducts/products'] ),
            deleteProduct,
        }
    }
}
</script>