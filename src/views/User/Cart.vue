<template>
    <div class="flex w-sm sm:w-full overflow-x-auto">
        <div class="w-3/4" v-if="cart">
            <div v-for="product in cart.data" :key="product.id" class="flex p-.5 sm:p-1 md:p-2 text-xs md:text-sm">
                <div class="w-1/3">
                    <img :src="product.image_src" alt="" class="w-auto h-auto min-w-full max-w-40 max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 xl:max-h-56 max-w-full">
                </div>
                <div class="w-2/3 p-2 text-center ">
                    <div class="">
                        <p class="text-gray-600 text-sm md:text-base">
                            {{ product.name}}
                        </p>
                    </div>
                    <TotalPrice :price="product.price" :discount="product.discount"  class="p-2 my-2 text-left "/>
                </div>
            </div>
        </div>
        <div class="w-1/4 float-right">
            <Checkout class="border border-gray-200 rounded-md p-0.5 md:p-1 xl:p-2 m-0.5 sm:m-1 md:m-2 lg:m-3 xl:m-4 2xl:m-6" />
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