<template>
    <div>
        <header/>
        <AppLayoutLinks v-if="!userIsGuest" />
        <AppLayoutLinksGuest v-else />
        <slot/>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppLayoutLinks from './AppLayoutLinks.vue'
import AppLayoutLinksGuest from './AppLayoutLinksGuest.vue'

export default {
    name: "AppLayoutHome",

    components: {
        AppLayoutLinks,
        AppLayoutLinksGuest
    },

    setup () {
        const store = useStore()
        return {
            userIsGuest: computed( () => store.getters.userIsGuest)
        }
    }
}
</script>