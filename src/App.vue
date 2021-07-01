<template>
  <app-layout>  
    <router-view class="bg-white md:my-4 my-2 md:mx-2 mx-0.5"/>
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
