<template>
    <div class="flex my-4">
        <div class="w-3/4" v-if="carts">
            <div v-for="cart in carts.data" :key="cart.id" class="flex mb-2 md:mb-4 ml-1 md:ml-2 text-xs md:text-sm">
                <div class="w-1/3">
                    <img :src="cart.product.image_src" :alt="cart.product.name" class="w-auto h-auto min-w-full max-w-40 max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-48 xl:max-h-56 max-w-full">
                </div>
                <div class="w-2/3 px-8 py-2 flex flex-wrap content-between">
                    <div class="w-full text-purple-600 text-sm md:text-base mb-1 md:mb-2">
                        {{ cart.product.name}}
                    </div>
                    <TotalPrice :price="cart.price" :discount="cart.discount" class="w-full"/>
                    <CartTools 
                        :cart="cart" 
                        @updateCart="updateCart($event)"
                        @deleteCart="deleteCart($event)"
                    />
                </div>
            </div>
        </div>
        <div class="w-1/4">
            <Checkout @payment="payment" class="mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6" />
        </div>
        <Message class="absolute bottom-4 right-4" 
            :message="'updated cart'"
            :showMessage="showMessage"
            @fadeMessage="showMessage = false" 
        />
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const showMessage = ref(false)

        const carts = computed(() => store.getters['userCart/cart'])

        const updateCart = async (cart) => {
            await store.dispatch('userCart/updateCart', cart)
            showMessage.value = true
        }

        const deleteCart = async cartId => {
            await store.dispatch('userCart/deleteCart', cartId)
            showMessage.value = true
        }

        const payment = async () => {
           const paymentLink = await store.dispatch('userPayment/createPayment')
           window.location.replace(paymentLink.data);
        }

        return {
            carts,
            updateCart,
            deleteCart,
            showMessage,
            payment,
        }
    }
}
</script>