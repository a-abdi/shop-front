<template>
  <app-layout>  
    <router-view class="bg-white md:my-4 my-2"/>
  </app-layout> 
</template>

<script>
  import AppLayout from './layouts/AppLayout.vue'
  import { useStore } from 'vuex'

  export default {
    name: 'App',

    components: {
      AppLayout
    },
    
    setup () {
      const userInfo = localStorage.getItem('user')
      const store = useStore()

      if (userInfo) {
        const userData = JSON.parse(userInfo)
        store.commit('setUserData', userData)
      }
      
      return {

      }
    }
  }
</script>
