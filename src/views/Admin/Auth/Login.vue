<template>
    <LoginForm :storeLogin="'adminAuth/login'" :forgotPasswordLink="'/admin/forgot-password'">
        Admin Login
    </LoginForm>
</template>

<script>
import LoginForm from '../../../components/LoginForm.vue'

export default {
    name: "AdminLogin",

    components: {
        LoginForm
    },
}
</script>