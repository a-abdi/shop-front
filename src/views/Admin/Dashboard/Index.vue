<template>
    <div class="flex bg-gray-50 h-full bg-transparent text-xs md:text-sm 2xl:text-base">
        <Sidebar class="hidden sm:block"/>
        <div class="bg-white w-full h-5/6 m-0.5 sm:mx-5 mt-5 overflow-y-auto border border-gray-200 shadow-lg">
           <div class="">
               <router-view></router-view>
           </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../../components/AdminDashboardSidebar.vue'

export default {
    components: {
        Sidebar
    },
    setup() {

        return {

        }
    }
}
</script>

