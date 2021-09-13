<template>
    <div class="form-base">
        <div class="form-design">
            <form @submit.prevent="sendResetPasswordLink">
                <div class="form-title">
                    <slot></slot>
                </div>
                <div class="form-label">
                    <label for="email">email</label>
                </div>
                <div class="px-2 mb-4">
                    <input v-model="form.email" id="email" type="email" class="form-input">
                </div>
                <div class="p-2 mb-4">
                     <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="btn-blue w-full">
                        Send Reset Password Link
                    </button>    
                </div>
                <ErrorMessage class="m-2" :error="form.error" />
                <SuccessMessage class="m-2" :success="form.success" />
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import ErrorMessage from '../components/ErrorMessage.vue'
import SuccessMessage from '../components/SuccessMessage.vue'

export default {
    components: {
        ErrorMessage,
        SuccessMessage,
    },

    props: {
        storeForgotPassword: String
    },

    setup (props) {
        const store = useStore()
        const response = ref(null)
        const form = reactive({
            email: null,
            error: null,
            success: null,
            loading: false,
        })

        const sendResetPasswordLink = async () => { 
            form.loading = true
            form.error = null
            form.success = null

            try {
                response.value = await store.dispatch(props.storeForgotPassword, { email: form.email })
                console.log(response.value.data)
                form.success = response.value.data

            } catch (error) {
                form.error = error.response.data
            }

            form.loading = false
        }

        return {
            form,
            sendResetPasswordLink,
        }
    }
}
</script>