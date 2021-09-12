<template>
    <ProductForm 
        :defaultFormData="{
            name: '',
            price: '',
            discount: 0,
            quantity: '',
            image: '',
            description: '',
        }" 
        :productCategory="''" 
        :storeSendProduct="'adminProducts/createProduct'">
            create Product
    </ProductForm>
</template>

<script>
import ProductForm from '../../../../components/AdminProductForm.vue'

export default {
    name: "ProductsEdit",

    components: {
        ProductForm,
    },
}
</script>