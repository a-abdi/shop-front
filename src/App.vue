<template>
  <AppLayout>  
    <router-view class="bg-white"/>
  </AppLayout> 
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
      const userData = localStorage.getItem('user')
      const cartData = localStorage.getItem('cart')
      const adminData = localStorage.getItem('admin')
      const store = useStore()

      if (userData) {
        store.commit('setUserData', JSON.parse(userData))
      }

      if (adminData) {
        store.commit('setAdminData', JSON.parse(adminData))
      }

      if (cartData) {
        store.commit('setCartData', JSON.parse(cartData))
      }
      
      return {

      }
    }
  }
</script>
