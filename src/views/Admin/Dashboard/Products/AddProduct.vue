<template>
    <div class="flex w-full">
        <div class="w-1/3">
            <div class="sm:p-6 p-0.5 sm:m-0 mt-2">
                <img :src="imageUrl" alt="" class="w-auto h-auto max-w-64 max-h-64 mx-auto">
            </div>
        </div>
        <div class="w-2/3 border border-gray-200 rounded-md p-2 m-4">
            <div class="my-6">
                <input id="name" type="text" placeholder="name" class="w-full border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
            </div>
             <div class="flex justify-between my-2">
                <input id="price"    type="number" min="1" placeholder="price"    class="w-1/4 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <input id="discount" type="number" min="0" placeholder="discount" class="w-1/4 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <input id="quantity" type="number" min="1" placeholder="quantity" class="w-1/4 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
            </div>
            <div class="my-6 flex justify-between">
                <input  ref="fileInput" @change="onFileChange" type="file" class="w-1/4 text-gray-600 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <select v-if="categories" name="category" id="category" autofocus="car" aria-placeholder="select category"  class="w-1/4 appearance-none bg-white text-gray-600 border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <option value="" disabled selected>Select your category</option>
                    <option v-for="category in categories.data" :key="category.id" :value="category.name">{{ category.name }}</option>
                </select>
                <button class="w-1/4 py-1 px-2 rounded-md text-gray-700 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700 hover:bg-gray-300 focus:bg-gray-400">
                    ADD Product
                </button>
            </div> 
            <div class="my-6 w-full">
                <textarea placeholder="description" class="p-2 text-gray-600 resize-y border rounded-md w-full h-48 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const fileInput = ref(null)
        const imageUrl = ref(null)
        const store = useStore()

        const categories = store.dispatch('adminGetCayegories')

        const onFileChange = (e) => {
            const file = e.target.files[0]
            imageUrl.value = URL.createObjectURL(file)
        } 

        return {
            fileInput,
            onFileChange,
            imageUrl,
            categories: computed( () => store.state.categories)
        }
    }
}
</script>