<template>
    <div class="form-base">
        <div class="form-design">
           <form @submit.prevent="login">
                <div class="form-title">
                    Admin Login
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
                        <router-link to="forgot-password" class="text-blue-600 ">
                            forgot your password?
                        </router-link>
                    </div>
                </div>
                <div v-if="error" class="text-center py-1 px-2 rounded-md text-white bg-red-600">
                    {{ error.message }}
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: "AdminLogin",

    setup () {
        const store = useStore()
        const error = ref(null)
        const router = useRouter()
        const form = reactive({
            email: null,
            password: null,
            loading: false,
        })

        const login = async() => {
            form.loading = true
            error.value = null
            try {
                await store.dispatch('adminAuth/login', form)
                router.push({
                    name: 'AdminDashboard'
                })
                
            } catch (e) {
                form.loading = false
                error.value = e.response.data
            }
        }

        return {
            login,
            form,
            error,
        }
    }
}
</script>