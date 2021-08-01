<template>
    <div class="form-base">
        <div class="form-design">
           <form @submit.prevent="login">
                <div class="form-title">
                    <slot></slot>
                </div>
                <div class="form-label">
                    <label for="email" class="">email</label>
                </div>
                <div class="mb-2 px-2 text-gray-600">
                    <input v-model="form.email" name="email" id="email" type="email" class="form-input">
                </div>
                <div class="form-label">
                    <label for="password" class="">password</label>
                </div>
                <div class="mb-2 px-2 text-gray-600">
                    <input v-model="form.password" name="password" id="password" type="password" class="form-input">
                </div>
                <div class="p-2 sm:flex">
                    <div class="">
                        <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="btn-blue">
                            Login
                        </button>
                    </div>
                    <div class="w-full flex items-center mt-2 sm:mt-0 sm:ml-4">
                        <router-link :to="forgotPasswordLink" class="text-blue-600 ">
                            forgot your password?
                        </router-link>
                    </div>
                </div>
                <div v-if="form.error" class="w-full px-2 mb-4">
                    <ErrorMessage class="my-2" :error="form.error" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ErrorMessage from '../components/ErrorMessage.vue'

export default {
    components: {
        ErrorMessage
    },

    props: {
        forgotPasswordLink: String,
        storeLogin: String,
        routerPushName: String,
    },

    setup (props) {
        const store = useStore()
        const router = useRouter()
        const form = reactive({
            email: null,
            password: null,
            error: null,
            loading: false,
        })

        const login = async() => {
            form.loading = true
            form.error = null
            try {
                await store.dispatch(props.storeLogin, form)
                router.push({
                    name: props.routerPushName
                })
                
            } catch (error) {
                console.log(error)
                form.error = error.response.data
            }

            form.loading = false
        }

        return {
            login,
            form,
        }
    }
}
</script>