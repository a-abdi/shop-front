<template>
    <div>
        <div class="flex border border-gray-200 rounded-md shadow-md">
            <div class="w-1/3">
                <img :src="product.image_src" alt="" class="mx-auto w-auto min-w-full h-auto max-h-32 sm:max-h-40 md:max-h-60 lg:max-h-80 max-w-80">
            </div>
            <div class="w-2/3 px-2 md:px-4 xl:px-6 grid grid-cols-1 place-content-between">
                <div class="text-center font-medium text-purple-600 text-sm md:text-base">
                    {{ product.name }}
                </div>

                <div class="">
                    <TotalPrice :price="product.price" :discount="product.discount" />
                </div>

                <div class="">
                    <div class="flex">
                        <label for="quantity" class="text-gray-600 pr-2">
                            quantity:
                        </label>
                        <p id="quantity" class="text-red-600">
                            {{ product.quantity }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-row-reverse mb-2">
                    <button @click="addToCart" class="btn-red">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        <div class="p-2"> 
            <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                {{ product.description }}
            </p>
        </div>
    </div>
</template>
 
<script>
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue'
    import TotalPrice from './TotalPrice.vue'

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

            const addToCart = async () => {
                try {
                    const user = computed (() => store.getters['userAuth/user'])
                    if(!user.value) {
                        router.push({ name: 'User/Auth/Login',  params: { }} )
                    }
                    else {
                        await store.dispatch('userCart/addToCart', { productId })
                    }

                } catch (e) {
                    
                }
            }

            return {
                product: computed ( () => store.state.product.data ),
                addToCart
            }
        }
    }
</script>