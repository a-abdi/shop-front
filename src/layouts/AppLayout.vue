<template>
    <component :is="layout">
        <slot/>
    </component>
</template>

<script>
    import AppLayoutDefault from './AppLayoutList/AppLayoutDefault.vue'
    import { watch, ref } from 'vue'
    import { useRoute } from 'vue-router'

    export default {
        name: 'AppLayout',

        setup () {
            const layout = ref()
            const route = useRoute()

            watch (
                () => route.meta,
                async meta => {
                   try {
                        const component = await import(`./AppLayoutList/${meta.layout}.vue`)
                        // const component = await import('../layouts/User/AppLayoutUser.vue')
                        layout.value = component?.default || AppLayoutDefault
                    } catch (error) {
                        layout.value = AppLayoutDefault
                    }
                },
            ) 

            return { layout }
        }
    }
</script>