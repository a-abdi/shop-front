<template>
    <ForgotPasswordForm :storeForgotPassword="'userAuth/forgotPassword'">
        Forgot Password
    </ForgotPasswordForm>
</template>

<script>
import ForgotPasswordForm from '../../../components/ForgotPasswordForm.vue'

export default {
    components: {
        ForgotPasswordForm
    },
}
</script>