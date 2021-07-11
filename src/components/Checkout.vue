<template>
    <div class="text-xs md:text-sm 2xl:text-base">
        <div class="p-1 md:p-2 2xl:p-4">
            <span class="text-gray-600">
                <label for="price"> Price: </label>
            </span>
            <span id="price" class="text-red-600 pl-2">
                ${{ formatPrice(sumPrice) }}
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4">
            <span class="text-gray-600">
                <label for="discount"> Discount: </label>
            </span>
            <span id="discount" class="text-red-600 pl-2">
                ${{ formatPrice(sumDiscount) }}
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4">
            <span class="text-gray-800">
                <label for="total"> Total: </label>
            </span>
            <span id="total" class="text-red-600 pl-2">
                ${{ formatPrice(sumPrice - sumDiscount) }}
            </span>
        </div>
        <div class="border-t border-gray-200 p-1 md:p-2 2xl:p-4">
            <button class="p-2 mr-2 rounded-lg text-white bg-red-500 hover:bg-red-600 focus:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 tracking-wider">
                Payment
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const sumPrice = ref(0)
        const sumDiscount = ref(0)
        const cart = store.state.cart

        const formatPrice = (price) => {
            let val = (price/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }

        for (let index = 0; index < cart.data.length; index++) {
            sumPrice.value += cart.data[index].price
            sumDiscount.value += cart.data[index].discount
        }

        return {
            sumPrice,
            sumDiscount,
            formatPrice
        }

    }
}
</script>