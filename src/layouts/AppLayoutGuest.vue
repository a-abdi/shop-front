<template>
    <div>
        <header/>
        <AppLayoutLinksGuest/>
        <slot/>
    </div>
</template>

<script>
import AppLayoutLinksGuest from './AppLayoutLinksGuest.vue'

export default {
    name: "AppLayoutGuest",

    components: {
        AppLayoutLinksGuest
    },

    setup () {

    }
}
</script>