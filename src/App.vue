<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',

    components: {

    },
    
    setup () {
    
      return {

      }
    }
  }
</script>
