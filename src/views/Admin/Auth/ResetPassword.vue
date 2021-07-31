<template>
        <ResetPasswordForm :storeResetPassword="'adminAuth/resetPassword'">
            Admin Reset Password  
        </ResetPasswordForm>
</template>

<script>
import ResetPasswordForm from '../../../components/ResetPasswordForm.vue'

export default {
    components: {
        ResetPasswordForm,
    },
}
</script>

