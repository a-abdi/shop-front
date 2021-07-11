<template>
    <div>
        <header/>
        <AdminLinks  />
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
            userIsGuest: computed( () => store.getters.userIsGuest)
        }
    }
}
</script>