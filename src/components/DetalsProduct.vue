<template>
    <div class="">
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
                        <div id="quantity" class="text-red-600">
                            {{ product.quantity }}
                        </div>
                    </div>
                </div>
                <div class="flex flex-row-reverse mb-2">
                    <button v-if="!cartData.exist" @click="addToCart" class="btn-red">
                        Add To Cart
                    </button>
                    <CartTools
                        v-if="cartData.exist"
                        :cart="cartData.data"
                        @updateCart="updateCart($event)"
                        @deleteCart="deleteCart($event)"
                    />
                </div>
            </div>
        </div>
        <div class="p-2"> 
            <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                {{ product.description }}
            </p>
        </div>
        <Message class="absolute bottom-4 right-4 bg-gray-300" 
            :message="message"
            :showMessage="showMessage"
            @fadeMessage="showMessage = false" 
        />
    </div>
</template>
 
<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import TotalPrice from './TotalPrice.vue'
import Message from './Message.vue'

export default {
    components: {
        TotalPrice,
        Message,
    },

    async setup () {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const message = ref(null)
        const showMessage = ref(false)
        const productId = route.params.productId
        const carts = computed(() => store.getters['userCart/cart'])
        const cartData = ref(getCart(carts.value.data, productId))

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
            const user = computed (() => store.getters['userAuth/user'])
            if(!user.value) {
                router.push({ name: 'User/Auth/Login',  params: { }} )
            }
            else {
                await store.dispatch('userCart/addToCart', { productId })
                showMessage.value = true
                message.value = 'Add product to cart.'
            }
        }

        const updateCart = async (cart) => {
            await store.dispatch('userCart/updateCart', cart)
            message.value = 'updated cart.'
            showMessage.value = true
        }

        const deleteCart = async cartId => {
            await store.dispatch('userCart/deleteCart', cartId)
            message.value = 'deleted cart.'
            showMessage.value = true
        }

        watch ( 
            () => carts.value.data,
            carts => {
                cartData.value = getCart(carts, productId) 
            }
        )

        return {
            product: computed ( () => store.state.product.data ),
            addToCart,
            message,
            showMessage,
            cartData,
            updateCart,
            deleteCart
        }
    }
}

function getCart(carts, productId)
{
    let cartData = {
        exist: false,
        data: null,
    }

    carts.forEach(cart => {
        if (cart.product_id == productId) {
            cartData.exist = true
            cartData.data = cart
        }
    });

    return cartData
}
</script>