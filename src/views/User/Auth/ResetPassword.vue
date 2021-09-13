<template>
        <ResetPasswordForm :storeResetPassword="'userAuth/resetPassword'">
            Reset Password  
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

