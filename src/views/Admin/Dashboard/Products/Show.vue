<template>
    <div v-if="product" class="w-full">
       <div class="sm:flex text-xs sm:text-sm mt-2">
            <div class="w-full sm:w-1/3 lg:p-6 md:px-4 sm:px-1 sm:py-6 p-0.5">
                <img :src="product.data.image_src" alt="" class="w-auto h-auto min-w-full max-w-64 max-h-56 md:max-h-56 sm:max-h-48 lg:max-h-64 mx-auto">
            </div>
            <div class="w-full sm:w-2/3 lg:p-6 md:px-4 sm:px-1 sm:py-6 p-0.5">
                <div class="border border-gray-200 rounded-md px-4 shadow">
                    <div class="w-full text-center p-2 text-lg my-2">
                        {{ product.data.name }}
                    </div>
                    <div class="w-full flex my-2">
                        <div class="p-1 text-gray-600">
                            <label for="price">Price:</label>
                        </div>
                        <Currency id="price" :money="product.data.price" class="text-red-600 p-1" />
                    </div>
                    <div class="w-full flex my-2">
                        <div class="p-1 text-gray-600">
                            <label for="discount">Discount:</label>
                        </div>
                        <Currency id="discount" :money="product.data.discount" class="text-red-600 p-1" />
                    </div>
                    <div class="w-full flex my-2">
                        <div class="p-1 text-gray-600">
                            <label for="quantity">Quantity:</label>
                        </div>
                        <div id="quantity" class="p-1 text-red-600">
                            {{ product.data.quantity }}
                        </div>
                    </div>
                    <div class="w-full flex my-2">
                        <div class="p-1 text-gray-600">
                            <label for="category">Category:</label>
                        </div>
                        <div id="category" class="text-red-600 p-1">
                            {{ product.data.category[0].name }}
                        </div>
                    </div>
                    <div class="w-full my-2">
                        <p class="text-gray-600 p-1 leading-loose tracking-wide">
                            {{ product.data.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Currency from '../../../../components/Currency.vue'

export default {
    components: {
        Currency
    },

    setup () {
        const route = useRoute()
        const store = useStore()
        const productId = route.params.productId

        store.dispatch('adminProducts/getProduct', productId)

        return {
            product: computed ( () => store.getters['adminProducts/product'] ),
        }
    }
}
</script>