<template>
    <div>
        <div v-if="discount != 0">
            <div class="flex flex-row py-2">
                <div class="pr-4">
                    <p class="line-through text-gray-400">
                        ${{ formatPrice(price) }}
                    </p>
                </div> 
                <div class="bg-red-500 inline-flex rounded-lg p-0.5">
                    <p class="text-white">
                        {{ percentage }}
                    </p>
                </div>
            </div>
            <div>
                ${{ formatPrice(totalPrice) }}
            </div>
        </div>
        <div v-else class="pt-2 pb-8">
            ${{ formatPrice(Price) }}
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    props: {
        price: Number,
        discount: Number,
    },

    setup (props) {

        const formatPrice = (price) => {
            let val = (price/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
       
        return {
            totalPrice: computed ( () => parseInt(props.price)  - parseInt(props.discount)  ),
            percentage: computed ( () => `${(Math.round((props.discount / props.price) * 1000) / 10)}%` ),
            formatPrice,

        }
    },
}
</script>