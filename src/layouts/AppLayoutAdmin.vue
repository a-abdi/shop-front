<template>
    <div>
        <header/>
        <AdminLinks v-if="isAdmin" />
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
            isAdmin: computed( () => store.state.user.isAdmin)
        }
    }
}
</script>