<template>
     <form @submit.prevent="editCategory" >
        <div class="px-1 sm:p-4 my-6 mx-auto w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 border border-gray-200 rounded-md">
            <div class="w-full my-4">
                <input v-model="form.name" id="name" type="text" placeholder="name" class="form-input">
            </div>
            <div class="w-full my-4">
                <textarea v-model="form.description" placeholder="description" class="p-2 text-gray-600 resize-y border rounded-md w-full h-16 sm:h-24 md:h-32 xl:h-40 focus:outline-none focus:ring-2 focus:ring-blue-200"></textarea>
            </div>
            <div class="w-full my-4">
                <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="btn-blue">
                    Edit Category
                </button>
            </div> 
            <ErrorMessage v-if="form.error" :error="form.error" />
            <SuccessMessage v-if="form.success" :success="form.success" />
        </div>
    </form>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import ErrorMessage from '../../../../components/ErrorMessage.vue'
import SuccessMessage from '../../../../components/SuccessMessage.vue'

export default {
    name: "ProductsEdit",

    components: {
        ErrorMessage,
        SuccessMessage,
    },

    setup () {
        const store = useStore()
        const route = useRoute()
        const categoryId = route.params.categoryId
        const category = ref(null)
        const form = reactive({
            name: '',
            description: '',
            loading: false,
            error: null,
            success:null,
        })

        const getCategory = async () => {
            await store.dispatch('adminCategories/getCategory', categoryId)
            category.value = computed(() => store.getters['adminCategories/category'])
            form.name = category.value.value.data.name
            form.description = category.value.value.data.description
        }

        onMounted(getCategory)

        const response = ref(null)
        const editCategory = async () => {
            form.loading = true
            form.error = null
            form.success = null

            const category = {
                id: categoryId,
                data: {
                    name: form.name,
                    description: form.description,
                }
            }
            try {
                response.value = await store.dispatch('adminCategories/editCategory', category)
                form.success = response.value.data
            } catch (error) {
                form.error = error.response.data
            }
            form.loading = false
        }

        return {
            form,
            editCategory,
        }
    }
}
</script>