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
                    <TotalPrice :price="cart.price" :discount="cart.discount"  class="w-full"/>
                    <div class="w-full flex">
                        <div class="flex px-2.5 py-1 border border-gray-200 rounded-md">
                            <button @click="updateCart(cart.quantity - 1, cart.id)" :disabled="cart.quantity == 1" :class="{'text-red-200': cart.quantity == 1, 'text-red-600': cart.quantity > 1}" class="focus:outline-none px-0.5">
                                <IconRemove />
                            </button>
                            <div class="px-0.5">{{ cart.quantity }}</div>
                            <button @click="updateCart(cart.quantity + 1, cart.id)" :disabled="cart.quantity == 5" :class="{'text-red-200': cart.quantity == 5, 'text-red-600': cart.quantity < 5}"  class="focus:outline-none px-0.5">
                                <IconAdd />
                            </button>
                        </div>
                        <div class="px-2.5 py-1.5 ml-2">
                            <button @click="deleteCart(cart.id)" class="flex text-gray-600 focus:outline-none">
                                <IconDelete /> 
                                <span class="px-2">
                                    Delete
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/4">
            <Checkout class="mx-0.5 sm:mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6" />
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconDelete from '~icons/wpf/delete.vue'
import IconAdd from '~icons/mi/add.vue'
import IconRemove from '~icons/mi/remove.vue'

export default {
    components: {
        IconAdd,
        IconRemove,
        IconDelete,
    },

    setup () {
        const store = useStore()

        const carts = computed(() => store.getters['userCart/cart'])

        const updateCart = async (quantity, id) => {
            const cart = {
                quantity,
                id
            }
            try {
                await store.dispatch('userCart/updateCart', cart)
            } catch (error) {
                
            }
        }

        const deleteCart = async cartId => {
            await store.dispatch('userCart/deleteCart', cartId)
        }

        return {
            carts,
            updateCart,
            deleteCart,
        }
    }
}
</script>