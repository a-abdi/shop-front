<template>
    <div class="h-screen overflow-hidden">
        <header/>
        <AdminLinks v-if="isLoggined" />
        <slot />
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AdminLinks from '../Links/AdminLinks.vue'

export default {
    name: "AppLayoutHome",

    components: {
        AdminLinks,
    },

    setup () {
        const store = useStore()

        return {
            isLoggined: computed( () => store.getters['adminAuth/checkAuth'])
        }
    }
}
</script>