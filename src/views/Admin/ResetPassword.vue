<template>
    <form @submit.prevent="resetPassword">
        <ResetPassword>
            <template #title> 
                Admin Reset Password  
            </template>

            <template #password> 
                    <input v-model="form.password" id="password" type="password" class="input">
            </template>

            <template #confirm> 
                    <input v-model="form.password_confirmation" id="confirm_password" type="password" class="input mb-6">
            </template>

            <template #btn> 
                <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="btn">
                    Reset Password
                </button>    
            </template>
            <template #message> 
                <ErrorMessage class="my-2" :error="form.error" />
                <SuccessMessage class="my-2" :success="form.success" />
            </template>
        </ResetPassword>
    </form>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ResetPassword from '../../components/ResetPassword.vue'
import ErrorMessage from '../../components/ErrorMessage.vue'
import SuccessMessage from '../../components/SuccessMessage.vue'

export default {
    components: {
        ResetPassword,
        ErrorMessage,
        SuccessMessage,
    },

    setup () {
        const store = useStore()
        const route = useRoute()
        const response = ref(null)
        const resetPasswordToken = route.params.token
        const form = reactive({
            password: null,
            password_confirmation: null,
            error: null,
            success: null,
            loading: false,
            token: resetPasswordToken,
        })

        const resetPassword = async () => {
            form.loading = true
            form.error = null
            form.success = null

            try {
                response.value = await store.dispatch('adminAuth/resetPassword', form)
                form.success = response.value.data

            } catch (error) {
                form.error = error.response.data
            }

            form.loading = false
        } 

        return {
            form,
            resetPassword,
        }
    }
}
</script>

<style>
    .input {
        @apply w-full px-2 py-1 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-200;
    }

    .btn {
        @apply py-1 text-white tracking-wide bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-800;
    }
</style>

