<template>
    <div>
        <div class="flex">
            <div class="w-1/3 overflow-hidden">
                <img :src="product.image_src" alt="" class="mx-auto w-auto min-w-full h-auto max-h-32 sm:max-h-40 md:max-h-60 lg:max-h-80 max-w-80">
            </div>
            <div class="w-2/3">
                <div class="text-center text-gray-800 font-medium">
                    {{ product.name }}
                </div>

                <div class="mx-2">
                    <TotalPrice :price="product.price" :discount="product.discount" class="border p-2 rounded-md" />
                </div>

                <div class="px-2 mx-2 my-1 md:my-8 flex justify-between">
                    <div class="flex">
                        <label for="quantity" class="text-gray-600 pr-4">
                            quantity:
                        </label>

                        <p id="quantity" class="text-red-600">
                            {{ product.quantity }}
                        </p>
                    </div>

                     <div class="sm:hidden">
                        <button class="p-1 mx-2 rounded-lg text-white bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div class="hidden sm:flex flex-row-reverse">
                    <button class="p-2 mr-2 rounded-lg text-white bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        <div class="p-2"> 
            <p class="text-gray-600 text-sm leading-relaxed">
                {{ product.description }}
            </p>
        </div>
    </div>
</template>
 
<script>
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue'
    import TotalPrice from '../components/TotalPrice.vue'

    export default {
        components: {
            TotalPrice
        },

        async setup () {
            const store = useStore()
            const route = useRoute()
            const router = useRouter()
            const productId = route.params.productId

            try {
                await store.dispatch('getProduct', { productId })

            } catch (e) {
                router.push({
                    name: 'NotFound',

                    // preserve current path and remove the first char to avoid the target URL starting with `//`
                    params: { },

                    // preserve existing query and hash if any
                    query: '',
                    hash: '',
                })
            }

            const addToCart = () => {
                
            }

            return {
                product: computed ( () => store.state.product.data ),
            }
        }
    }
</script>