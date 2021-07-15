<template>
    <div>
        {{ doubleCount }}ff
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        return {
            doubleCount: computed( () => store.getters['a/doubleCount'])
        }
    }
}
</script>