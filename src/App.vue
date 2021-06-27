<template>
  <div class="">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view class="bg-white md:my-4 my-2 md:mx-2 mx-0.5"/>
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
