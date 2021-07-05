<template>
    <div class="my-4 max-w-xs sm:mx-2 mx-auto">
        <div>
            <img :src="product.image_src" alt="product" class="h-48 w-full">
        </div>

        <div class="tracking-wide font-medium px-2 py-2">
            {{ product.name }}
        </div>

        <div class="py-2 px-1">
            <p class="truncate text-gray-600">
                {{ product.description }}
            </p>
        </div>

        <div class="py-2">
            <TotalPrice :price="product.price" :discount="product.discount" />
        </div>
    </div>
</template>

<script>
    import TotalPrice from '../components/TotalPrice.vue'

    export default {
        components:{
            TotalPrice
        },
        props: {
            product: Object
        },

        setup(props) {

            const formatPrice = (price) => {
            let val = (price/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }

            return {
                formatPrice
            }
        }
    }
</script>