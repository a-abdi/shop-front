<template>
    <div class="flex my-4">
        <div class="w-3/4" v-if="cart">
            <div v-for="product in cart.data" :key="product.id" class="flex mb-2 md:mb-4 ml-1 md:ml-2 text-xs md:text-sm">
                <div class="w-1/3">
                    <img :src="product.image_src" alt="" class="w-auto h-auto min-w-full max-w-40 max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 xl:max-h-56 max-w-full">
                </div>
                <div class="w-2/3 px-8 py-2">
                    <div class="text-purple-600 text-sm md:text-base mb-1 md:mb-2">
                        {{ product.name}}
                    </div>
                    <TotalPrice :price="product.price" :discount="product.discount"  class=""/>
                </div>
            </div>
        </div>
        <div class="w-1/4">
            <Checkout class="mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6" />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TotalPrice from '../../components/TotalPrice.vue'
import Checkout from '../../components/Checkout.vue'

export default {
    components: {
            TotalPrice,
            Checkout,
        },

    setup () {
        const store = useStore()

        return {
            cart: computed(() => store.getters['userCart/cart']),
        }
    }
}
</script>