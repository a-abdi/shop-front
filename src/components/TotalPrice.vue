<template>
    <div v-if="discount != 0 && discount">
        <div class="flex flex-row py-2">
            <div class="pr-4 line-through text-gray-400">
                <Currency :money="price" />
            </div> 
            <div class="bg-red-500 text-white inline-flex rounded-lg p-0.5">
                {{ percentage }}
            </div>
        </div>
        <div>
            <Currency :money="totalPrice" />
        </div>
    </div>
    <div v-else class="pt-2 pb-8">
        <Currency :money="price" />
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import Currency from './Currency.vue'

export default {
    components: {
        Currency,
    },

    props: {
        price: Number,
        discount: Number,
    },

    setup (props) {
        return {
            totalPrice: computed ( () => parseInt(props.price)  - parseInt(props.discount)  ),
            percentage: computed ( () => `${(Math.round((props.discount / props.price) * 1000) / 10)}%` ),
        }
    },
}
</script>