<template>
    <div>
        <header/>
        <AdminLinks v-if="adminIsLoggined && !userIsLoggined" />
        <UserLinks v-if="userIsLoggined" />
        <GuestLinks v-else-if="!adminIsLoggined" />
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
            userIsLoggined: computed( () => store.getters.authUser),
            adminIsLoggined: computed( () => store.getters['admin/isLoggined'])
        }
    }
}
</script>