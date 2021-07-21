<template>
    <div class="w-full flex items-center sm:mt-6 md:mt-10 lg:mt-14 xl:mt-18">
        <div class="mx-auto w-11/12 sm-w-9/12 md:w-7/12 lg:w-5/12 xl:w-1/3 border border-gray-200 rounded-lg shadow-md text-xs md:text-sm">
           <form @submit.prevent="login">
                <div class="border-b border-gray-200 p-2">
                    Login
                </div>
                <div class="p-2 text-gray-600">
                    <label for="email" class="">email</label>
                    <input v-model="form.email" name="email" id="email" type="email" class="input">
                </div>
                <div class="p-2 text-gray-600">
                    <label for="password" class="">password</label>
                    <input v-model="form.password" name="password" id="password" type="password" class="input">
                </div>
                <div class="p-2">
                    <button :disabled="form.loading" :class="{'cursor-wait': form.loading}" type="submit" class="inline-flex px-3 py-1 text-gray-800 tracking-wide bg-blue-200 rounded-md focus:outline-none hover:bg-blue-300 focus:bg-blue-400 focus:ring-2 focus:ring-blue-500">Login</button>
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
                await store.dispatch('userAuth/login', form)
                router.push({
                    name: 'Home'
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

<style>
    .input {
        @apply w-full px-2 py-1 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-200;
    }
</style>