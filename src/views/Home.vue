<template>
    <div>
        <div v-if="products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            <ProductBox 
            v-for="product in products.data" 
            :key="product.id" 
            @click="showProduct(product.id)" 
            :product="product" 
            class="cursor-pointer" />
        </div>
        <Loading v-else />
    </div>
</template>

<script>
    import { computed } from '@vue/runtime-core'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    import ProductBox from '../components/ProductBox.vue'
    import Loading from '../components/Loading.vue'

    export default {
        components: {
            ProductBox,
            Loading
        },

        setup () {
            const store = useStore()
            const router = useRouter()

            store.dispatch('getProducts')

            const showProduct = productId => router.push(`/products/${productId}`)

            return {
                showProduct,
                products: computed ( () => store.state.products ),
            }
        }
    }
</script>