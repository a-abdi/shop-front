<template>
    <div v-if="product">
        <ProductForm 
        :defaultFormData="product.data"
        :productCategory="product.data.category[0].name"
        :storeSendProduct="'adminProducts/editProduct'">
            Edit Product
        </ProductForm>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ProductForm from '../../../../components/AdminProductForm.vue'

export default {
    name: "ProductsEdit",

    components: {
        ProductForm,
    },

    setup () {
        const store = useStore()
        const route = useRoute()
        const productId = route.params.productId
       
        store.dispatch('adminProducts/getProduct', productId)

        return {
            product: computed ( () => store.getters['adminProducts/product'] ),
        }
    }
}
</script>