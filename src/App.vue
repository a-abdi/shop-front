<template>
  <app-layout>  
    <router-view class="bg-white md:my-4 my-2"/>
  </app-layout> 
</template>

<script>
  import AppLayout from './layouts/AppLayout.vue'

  export default {
    name: 'App',

    components: {
      AppLayout
    },
    
    setup () {
    
      return {

      }
    }
  }
</script>
