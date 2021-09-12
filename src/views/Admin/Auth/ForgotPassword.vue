<template>
    <ForgotPasswordForm :storeForgotPassword="'adminAuth/forgotPassword'">
        Admin Forgot Password
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