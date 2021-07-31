<template>
    <div class="form-base">
        <div class="form-design">
            <form @submit.prevent="resetPassword">
                <div class="form-title">
                    <slot></slot>
                </div>
                <div class="text-sm text-gray-600 mb-1 px-4">
                    <label for="password">Password</label>
                </div>
                <div class="px-4">
                    <input v-model="form.password" id="password" type="password" class="form-input">
                </div>
                <div class="text-sm text-gray-600 mt-6 mb-1 px-4">
                    <label for="confirm_password">Confirm password</label>
                </div>
                <div class="px-4">
                    <input v-model="form.password_confirmation" id="confirm_password" type="password" class="form-input mb-6">
                </div>
                <div class="w-full px-4 mb-4">
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="btn-blue">
                        Reset Password
                    </button>    
                </div>
                <div class="w-full px-4 mb-4">
                    <ErrorMessage class="my-2" :error="form.error" />
                    <SuccessMessage class="my-2" :success="form.success" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ErrorMessage from './ErrorMessage.vue'
import SuccessMessage from './SuccessMessage.vue'

export default {
    components: {
        ErrorMessage,
        SuccessMessage,
    },

    props: {
        storeResetPassword: String
    },

    setup (props) {
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
                response.value = await store.dispatch(props.storeResetPassword, form)
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

