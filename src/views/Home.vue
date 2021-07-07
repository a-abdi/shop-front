<template>
    <div>
        <div v-if="products" class="grid responsive">
            <introduction-card v-for="product in products.data" :key="product.id" @click="showProduct(product.id)" :product="product" class="cursor-pointer"/>
        </div>
        <loading v-else />
    </div>
</template>

<script>
    import { computed } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import IntroductionCard from '../components/IntroductionCard.vue'
    import Loading from '../components/Loading.vue'

    export default {
        components: {
            IntroductionCard,
            Loading
        },

        setup () {
            const store = useStore()
            const router = useRouter()
            // delete axios.defaults.headers.common["Authorization"]

            store.dispatch('getProducts')

            const showProduct = productId => router.push(`/products/${productId}`)

            return {
                showProduct,
                products: computed ( () => store.state.products ),
            }
        }
    }
</script>

<style>
    .responsive {
        @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6;
    }
</style>