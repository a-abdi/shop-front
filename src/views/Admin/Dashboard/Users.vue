<template>
    <div>
        User
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        return {
            doubleCount: computed( () => store.getters[''])
        }
    }
}
</script>