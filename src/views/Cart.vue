<template>
    <div>
        <h1>{{ products }}</h1>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const store = useStore()

        return {
            products: computed(() => localStorage.getItem('user'))

        }
    }
}
</script>