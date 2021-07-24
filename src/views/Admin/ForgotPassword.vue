<template>
    <div class="w-full">
        <form @submit.prevent="recoveryPassword">
            <div class="w-11/12 sm:w-1/2 lg:w-1/3 mt-4 sm:mt-8 md:mt-16 lg:mt-24 mx-auto border border-gray-200 rounded">
                <div class="border-b border-gray-200 p-2">
                    Admin Forgot Password
                </div>
                <div class="text-sm text-gray-600 mb-0.5 mt-4 px-4">
                    <label for="email">Email</label>
                </div>
                 <div class="px-2 mb-4">
                    <input v-model="form.email" id="email" type="email" class="w-full px-2 py-1 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-200">
                </div>
                <div class="p-2 mb-4">
                     <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="py-1 px-2 text-white tracking-wide bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-800">
                        Recovery Password
                    </button>    
                </div>
                <ErrorMessage class="m-2" :error="form.error" />
                <SuccessMessage class="m-2" :success="form.success" />
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import ErrorMessage from '../../components/ErrorMessage.vue'
import SuccessMessage from '../../components/SuccessMessage.vue'

export default {
    components: {
        ErrorMessage,
        SuccessMessage,
    },

    setup () {
        const store = useStore()
        const response = ref(null)
        const form = reactive({
            email: null,
            error: null,
            success: null,
            loading: false,
        })

        const recoveryPassword = async () => { 
            form.loading = true
            form.error = null
            form.success = null

            try {
                response.value = await store.dispatch('adminAuth/forgotPassword', { email: form.email })
                console.log(response.value.data)
                form.success = response.value.data

            } catch (error) {
                form.error = error.response.data
            }

            form.loading = false
        }

        return {
            form,
            recoveryPassword,
        }
    }
}
</script>