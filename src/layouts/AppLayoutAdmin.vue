<template>
    <div>
        <header/>
        <AdminLinks v-if="authAdmin" />
        <slot/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AdminLinks from './Links/AdminLinks.vue'

export default {
    name: "AppLayoutHome",

    components: {
        AdminLinks,
    },

    setup () {
        const store = useStore()

        return {
            authAdmin: computed( () => store.getters.authAdmin)
        }
    }
}
</script>