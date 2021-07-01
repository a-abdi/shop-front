<template>
    <div>
        <header />
        <app-layout-links />
        <slot />
    </div>
</template>

<script>
import AppLayoutLinks from './AppLayoutLinks.vue'

export default {
    name: "AppLayoutAbout",

    components: {
        AppLayoutLinks
    }
}
</script>