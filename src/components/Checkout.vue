<template>
    <div class="text-xs md:text-sm 2xl:text-base border border-gray-200 rounded-md">
        <div class="p-1 md:p-2 2xl:p-4 flex">
            <span class="text-gray-600">
                <label for="price">Total Price: </label>
            </span>
            <span id="price" class="text-red-400 pl-2 flex">
                <Currency :money="sumPrice" />
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4 flex">
            <span class="text-gray-600">
                <label for="discount">Total Discount: </label>
            </span>
            <span id="discount" class="text-red-400 pl-2 flex">
                <Currency :money="sumDiscount" />
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4 flex">
            <span class="text-gray-800">
                <label for="total"> Payment: </label>
            </span>
            <span id="total" class="text-red-800 pl-2 flex">
                <Currency :money="sumPrice - sumDiscount" />
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4">
            <button @click="$emit('payment')" class="btn-red">
                Payment
            </button>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const sumPrice = ref(0)
        const sumDiscount = ref(0)
        const carts = computed( () => store.getters['userCart/cart']) 

        const checkOut = (carts) => {
            carts.forEach(cart => {
                sumPrice.value += cart.price * cart.quantity
                sumDiscount.value += cart.discount * cart.quantity
            });
        }

        watch( 
            () => carts.value.data,
            carts => {
                checkOut(carts)
            }
        )
         
        onMounted(carts, checkOut(carts.value.data))
        
        return {
            sumPrice,
            sumDiscount,
        }
    }
}
</script>