<template>
    <nav class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-14">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="mainMenu = !mainMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!--
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="#" class="bg-gray-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
                            
                            <router-link to="/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Home </router-link>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <router-link to="/cart" class="w-6 h-6 mr-2 focus:outline-none bg-cart bg-no-repeat text-white text-xs bg-center">
                        <span class="inline-flex bg-red-600 py-.5 px-1 rounded-full mt-4 mr-5">
                            {{ cartCount }}
                        </span>
                    </router-link>
                    <button class="bg-gray-50 p-1 rounded-full text-gray-600 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-gray-200">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                    <!-- Profile dropdown -->
                    <div class="ml-3 relative">
                        <div v-click-away="closeUserMenu">
                            <button @click="userMenu = !userMenu" type="button" class="bg-gray-50 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-gray-200" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="../../assets/ali.jpg"/>
                            </button>
                        </div>
                        <!--
                            Dropdown menu, show/hide based on menu state.

                            Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                            Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        -->
                        <div v-show="userMenu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-50 ring-1 ring-gray-300 ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                            <button @click="userSignOut" class="text-left w-full focus:outline-none block px-4 py-2 text-sm text-gray-600" role="menuitem" tabindex="-1" id="user-menu-item-2">
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu, show/hide based on menu state. -->
        <div v-show="mainMenu"  class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="bg-gray-50 text-gray-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                <router-link to="/" class="text-gray-600 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"> Home </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: "AppLayoutLinks",

    setup () {
        const store = useStore()
        const userMenu = ref(false)
        const mainMenu = ref(false)
        
        const userSignOut = () => store.dispatch('userSignOut')
        const closeUserMenu = () => userMenu.value = false

        store.dispatch('getCart')

        return {
            cartCount: computed(() => store.getters.cartCount),
            userSignOut,
            closeUserMenu,
            userMenu,
            mainMenu,
        }
    }
}
</script>