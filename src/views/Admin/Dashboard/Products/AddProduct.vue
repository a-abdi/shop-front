<template>
    <form @submit.prevent="addProduct" >
        <div class="flex w-full">
            <div class="w-1/3">
                <div class="sm:p-6 p-0.5 sm:m-0 mt-2">
                    <img :src="imageUrl" alt="" class="w-auto h-auto min-w-full max-w-64 max-h-64 mx-auto">
                </div>
            </div>
            <div class="w-2/3 border border-gray-200 rounded-md p-2 m-4">
                <div class="my-2 md:my-6">
                    <input v-model="form.name" id="name" type="text" placeholder="name" class="w-full border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                </div>
                <div class="md:flex md:justify-between my-2">
                    <input v-model="form.price"    id="price"    type="number" min="1" placeholder="price"    class="w-full md:w-1/4 my-2 md:my-0 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <input v-model="form.discount" id="discount" type="number" min="0" placeholder="discount" class="w-full md:w-1/4 my-2 md:my-0 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <input v-model="form.quantity" id="quantity" type="number" min="1" placeholder="quantity" class="w-full md:w-1/4 my-2 md:my-0 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                </div>
                <div class="md:flex md:justify-between my-2 md:my-6">
                    <input  ref="fileInput" @change="onFileChange" type="file" class="w-full md:w-1/4 my-2 md:my-0 text-gray-600 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <select v-model="form.category" v-if="categories" name="category" id="category" autofocus="car" aria-placeholder="select category"  class="w-full md:w-1/4 my-2 md:my-0 appearance-none bg-white text-gray-600 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <option value="" disabled selected>Category</option>
                        <option v-for="category in categories.data" :key="category.id" :value="category.name">{{ category.name }}</option>
                    </select>
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="w-full md:w-1/4 my-2 md:my-0 py-1 px-2 rounded-md text-gray-700 bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-300 focus:bg-blue-400">
                        Add Product
                    </button>
                </div> 
                <div v-if="form.error" class="text-center py-1 px-2 rounded-md text-white bg-red-600">
                    {{ form.error.message }}
                </div>
                 <div v-if="form.success" class="text-center py-1 px-2 rounded-md text-white bg-green-600">
                    {{ form.success.data.message }}
                </div>
                <div class="mt-6 mb-3 w-full">
                    <textarea v-model="form.description" placeholder="description" class="p-2 text-gray-600 resize-y border rounded-md w-full h-16 sm:h-24 md:h-32 xl:h-40 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const fileInput = ref(null)
        const imageUrl = ref(null)
        const store = useStore()
        const form = reactive({
            name: '',
            price: '',
            discount: 0,
            quantity: '',
            category: '',
            image: '',
            description: '',
            loading: false,
            error: null,
            success: null,
        })

        store.dispatch('adminCategories/getCayegories')

        const onFileChange = (e) => {
            const file = e.target.files[0]
            form.image = file
            imageUrl.value = URL.createObjectURL(file)
        }

        const addProduct = async () => {
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

            try {
               form.success = await store.dispatch('adminProducts/addProduct', formData)

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
            addProduct,
            categories: computed( () => store.getters['adminCategories/categories']),
        }
    }
}
</script>