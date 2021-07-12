<template>
    <div>
        <header/>
        <UserLinks v-if="!isGuest && !isAdmin" />
        <AdminLinks v-if="isAdmin" />
        <GuestLinks v-if="isGuest" />
        <slot/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import UserLinks from './Links/UserLinks.vue'
import GuestLinks from './Links/GuestLinks.vue'
import AdminLinks from './Links/AdminLinks.vue'

export default {
    name: "AppLayoutHome",

    components: {
        UserLinks,
        GuestLinks,
        AdminLinks
    },

    setup () {
        const store = useStore()
        return {
            isGuest: computed( () => store.getters.isGuest),
            isAdmin: computed( () => store.state.user.isAdmin)
        }
    }
}
</script>