<template>
    <form @submit.prevent="resetPassword">
        <ResetPassword>
            <template #title> 
                Admin Reset Password  
            </template>

            <template #password> 
                    <input id="password" type="password" class="input">
            </template>

            <template #confirm> 
                    <input id="confirm_password" type="password" class="input mb-6">
            </template>

            <template #btn> 
                <button type="submit" class="btn">
                    Reset Password
                </button>    
            </template>
        </ResetPassword>
    </form>
</template>

<script>
import { useRoute } from 'vue-router'
import ResetPassword from '../../components/ResetPassword.vue'

export default {
    components: {
        ResetPassword
    },

    setup () {
        const route = useRoute()
        const resetPasswordToken = route.params.token
        const resetPassword = () => {alert(resetPasswordToken)} 

        return {
            resetPassword
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

