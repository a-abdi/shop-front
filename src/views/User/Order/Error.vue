<template>
    <div class="">
        <div v-if="error.data" class="w-full h-16 mt-44 bg-red-400 flex items-center justify-center text-white text-xs sm:text-sm">
            {{ error.data.message }}
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
export default {
    setup () {
        const store = useStore()
        const error = ref('')

        const getError = async () => {
            error.value = await store.dispatch('userPayment/getLatestError')
        }

        onMounted(getError)

        return {
            error
        }
    }
}
</script>