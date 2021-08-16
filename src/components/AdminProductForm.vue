<template>
    <form @submit.prevent="sendProduct" >
        <div class="flex w-full">
            <div class="w-1/3">
                <div class="sm:p-4 p-0.5 sm:m-0 mt-2">
                    <img :src="imageUrl" alt="" class="w-auto h-auto min-w-full max-w-64 max-h-64 mx-auto">
                </div>
            </div>
            <div class="w-2/3 border border-gray-200 rounded-md p-2 m-4">
                <div class="my-2 md:my-6">
                    <input v-model="form.name" id="name" type="text" placeholder="name" class="w-full form-input">
                </div>
                <div class="md:flex md:justify-between my-2">
                    <input v-model="form.price"    id="price"    type="number" min="1" placeholder="price"    class="w-full md:w-1/4 my-2 md:my-0 form-input">
                    <input v-model="form.discount" id="discount" type="number" min="0" placeholder="discount" class="w-full md:w-1/4 my-2 md:my-0 form-input">
                    <input v-model="form.quantity" id="quantity" type="number" min="1" placeholder="quantity" class="w-full md:w-1/4 my-2 md:my-0 form-input">
                </div>
                <div class="md:flex md:justify-between my-2 md:my-6">
                    <input ref="fileInput" @change="onFileChange" type="file" class="w-full md:w-1/4 my-2 md:my-0 text-gray-600 form-input">
                    <select v-model="form.category" v-if="categories" name="category" id="category" autofocus="car" aria-placeholder="select category"  class="w-full md:w-1/4 my-2 md:my-0 appearance-none bg-white text-gray-600 form-input">
                        <option value="" disabled selected>Category</option>
                        <option v-for="category in categories.data" :key="category.id" :value="category.name">{{ category.name }}</option>
                    </select>
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="w-full md:w-1/4 my-2 md:my-0 btn-blue">
                        <slot> send Product </slot>
                    </button>
                </div> 
                <ErrorMessage v-if="form.error" :error="form.error" />
                <SuccessMessage v-if="form.success" :success="form.success" />
                <div class="mt-6 mb-3 w-full">
                    <textarea v-model="form.description" placeholder="description" class="p-2 text-gray-600 resize-y border rounded-md w-full h-16 sm:h-24 md:h-32 xl:h-40 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { computed, ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import ErrorMessage from './ErrorMessage.vue'
import SuccessMessage from './SuccessMessage.vue'

export default {
    components: {
        ErrorMessage,
        SuccessMessage,
    },

    props: {
        defaultFormData: Object,
        productCategory: String,
        storeSendProduct: String,
    },

    setup (props) {
        const fileInput = ref(null)
        const imageUrl = ref(null)
        const response = ref(null)
        const store = useStore()
        const { defaultFormData } = toRefs(props)
        const form = reactive({
            name:        defaultFormData.value.name,
            price:       defaultFormData.value.price,
            discount:    defaultFormData.value.discount,
            quantity:    defaultFormData.value.quantity,
            description: defaultFormData.value.description,
            category:    props.productCategory,
            image:       '',
            loading:     false,
            error:       null,
            success:     null,
        })
        
        imageUrl.value = defaultFormData.value.image_src


        store.dispatch('adminCategories/getCategories')

        const onFileChange = (e) => {
            const file = e.target.files[0]
            form.image = file
            imageUrl.value = URL.createObjectURL(file)
        }

        const sendProduct = async () => {
            form.loading = true
            form.error = null
            form.success = null
            const formData = new FormData()

            formData.append('name', form.name)
            formData.append('price', form.price)
            formData.append('discount', form.discount)
            formData.append('quantity', form.quantity)
            formData.append('image', form.image)
            formData.append('category', form.category)
            formData.append('description', form.description)

            const product = {
                id: defaultFormData.value.id,
                data: formData
            }
            try {
                response.value = await store.dispatch(props.storeSendProduct, product)
                form.success = response.value.data
            } catch (error) {
                form.error = error.response.data
            }
            form.loading = false
        }

        return {
            form,
            fileInput,
            onFileChange,
            imageUrl,
            sendProduct,
            categories: computed( () => store.getters['adminCategories/categories']),
        }
    }
}
</script>