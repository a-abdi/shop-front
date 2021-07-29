<template>
    <form @submit.prevent="createCategory" >
        <div class="px-1 sm:p-4 my-6 mx-auto w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 border border-gray-200 rounded-md">
            <div class="w-full my-4">
                <input v-model="form.name" id="name" type="text" placeholder="name" class="w-full border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200">
            </div>
            <div class="w-full my-4">
                <textarea v-model="form.description" placeholder="description" class="p-2 text-gray-600 resize-y border rounded-md w-full h-16 sm:h-24 md:h-32 xl:h-40 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
            <div class="w-full my-4">
                <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="w-full md:w-1/4 my-2 md:my-0 py-1 px-2 rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700 hover:bg-blue-600 focus:bg-blue-700">
                    Create Category
                </button>
            </div> 
            <div v-if="form.error" class="text-center py-1 px-2 rounded-md text-white bg-red-600">
                {{ form.error.message }}
            </div>
            <div v-if="form.success" class="text-center py-1 px-2 rounded-md text-white bg-green-600">
                {{ form.success.data.message }}
            </div>
        </div>
    </form>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()
        const form = reactive({
            name: '',
            description: '',
            loading: false,
            error: null,
            success: null,
        })

        const createCategory = async () => {
            form.loading = true
            form.error = null
            form.success = null

            try {
               form.success = await store.dispatch('adminCategories/createCategory', {
                    'name' :       form.name,
                    'description': form.description
               })

            } catch (error) {
                form.error = error.response.data
            }
            form.loading = false
        }

        return {
            form,
            createCategory,
        }
    }
}
</script>