<template>
    <div class="w-full flex items-center sm:mt-6 md:mt-10 lg:mt-14 xl:mt-18">
        <div class="mx-auto w-11/12 sm-w-9/12 md:w-7/12 lg:w-5/12 xl:w-1/3 border border-gray-200 rounded-lg shadow-md text-xs md:text-sm">
            <form @submit.prevent="register">    
                <div class="border-b border-gray-200 p-2">
                    Register
                </div>
                <div class="p-2 text-gray-600">
                    <label for="name" class="">name</label>
                    <input v-model="form.name" name="name" id="name" type="text" class="input" required>
                </div>
                <div class="p-2 text-gray-600">
                    <label for="email" class="">email</label>
                    <input v-model="form.email" name="email" id="email" type="email" class="input" required>
                </div>
                <div class="p-2 text-gray-600">
                    <label for="password" class="">password</label>
                    <input  v-model="form.password" name="password" id="password" type="password" class="input" required>
                </div>
                <div class="p-2 text-gray-600">
                    <label for="password_confirmation" class="">confirm</label>
                    <input v-model="form.password_confirmation" name="password_confirmation" id="password_confirmation" type="password" class="input" required>
                </div>
                <div class="p-2">
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" class="inline-flex px-3 py-1 text-gray-800 tracking-wide bg-blue-200 rounded-md focus:outline-none hover:bg-blue-300 focus:bg-blue-400 focus:ring-2 focus:ring-blue-500">Register</button>
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

export default {
    setup () {
        const store = useStore()
        const error = ref(null)
        const response = ref(null)
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
                response.value = await store.dispatch('userRegister', form)
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


<style>
    .input {
        @apply w-full px-2 py-1 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-200;
    }
</style>