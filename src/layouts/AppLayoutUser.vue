<template>
    <div>
        <header/>
        <AdminLinks v-if="authAdmin && !authUser" />
        <UserLinks v-if="authUser" />
        <GuestLinks v-else-if="!authAdmin" />
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
            authUser: computed( () => store.getters.authUser),
            authAdmin: computed( () => store.getters.authAdmin)
        }
    }
}
</script>