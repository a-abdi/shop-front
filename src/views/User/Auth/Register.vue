<template>
    <div class="form-base">
        <div class="form-design">
            <form @submit.prevent="register">    
                <div class="form-title">
                    Register
                </div>
                <div class="form-label">
                    <label for="name" class="">name</label>
                </div>
                <div class="mb-2 px-2 text-gray-600">
                    <input v-model="form.name" name="name" id="name" type="text" class="form-input" required>
                </div>
                <div class="form-label">
                    <label for="email" class="">email</label>
                </div>
                <div class="mb-2 px-2 text-gray-600">
                    <input v-model="form.email" name="email" id="email" type="email" class="form-input" required>
                </div>
                <div class="form-label">
                    <label for="password" class="">password</label>
                </div>
                <div class="mb-b px-2 text-gray-600">
                    <input  v-model="form.password" name="password" id="password" type="password" class="form-input" required>
                </div>
                <div class="form-label">
                    <label for="password_confirmation" class="">confirm</label>
                </div>
                <div class="mb-2 px-2 text-gray-600">
                    <input v-model="form.password_confirmation" name="password_confirmation" id="password_confirmation" type="password" class="form-input" required>
                </div>
                <div class="m-2">
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" class="btn-blue">Register</button>
                </div>
                <div v-if="error" class="text-center py-1 px-2 rounded-md text-white bg-red-600">
                    {{ error.message }}
                </div>
                <div v-if="response" class="text-center py-1 px-2 rounded-md text-white bg-green-600">
                    {{ response.data.message }}
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
    setup () {
        const store = useStore()
        const error = ref(null)
        const response = ref(null)
        const router = useRouter()
        const form = reactive({
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            loading: false,
        })

        const register = async() => {
            form.loading = true
            error.value = null
            response.value = null
            try {
                response.value = await store.dispatch('userAuth/register', form)
                response.value = await store.dispatch('userAuth/login', {
                    email: form.email, 
                    password:form.password
                })
                
                router.push({ name: 'Home',  params: { }})
                form.loading = false
                
            } catch (e) {
                form.loading = false
                error.value = e.response.data
            }
        }

        return {
            register,
            form,
            error,
            response,
        }
    }
}
</script>