<template>
    <LoginForm 
    :storeLogin="'userAuth/login'" 
    :forgotPasswordLink="'/forgot-password'" 
    :routerPushName="'Home'">
        Login
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