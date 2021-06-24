<template>
    <div class="text-center text-gray-600 bg-gray-300 mt-24">
        <h1>Home page {{ user }}</h1>
    </div>
</template>

<script>
    export default {
        computed: {
            user () {
                return this.$store.state.user
            }
        } 
    }
</script>