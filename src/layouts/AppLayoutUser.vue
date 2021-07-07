<template>
    <div>
        <header/>
        <AppLayoutLinks v-if="user" />
        <AppLayoutLinksGuest v-else />
        <slot/>
    </div>
</template>

<script>
import { computed } from 'vue'
import AppLayoutLinks from './AppLayoutLinks.vue'
import AppLayoutLinksGuest from './AppLayoutLinksGuest.vue'

export default {
    name: "AppLayoutHome",

    components: {
        AppLayoutLinks,
        AppLayoutLinksGuest
    },

    setup () {
        
        return {
            user: computed( () => localStorage.getItem('user'))
        }
    }
}
</script>