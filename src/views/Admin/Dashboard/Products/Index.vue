<template>
    <div class="min-w-min">
       <div class="flex justify-between w-full h-10 bg-blue-300">
           <div class="ml-4 flex justify-items-center my-auto tracking-wider cursor-pointer">
               Search
           </div>
           <div class="flex justify-items-center mr-4">
               <router-link to="/admin/dashboard/products/add" class="my-auto px-2 py-1 rounded-md tracking-wider bg-blue-500 text-white hover:bg-blue-600"> add Product</router-link>
           </div>
       </div>
       <div class="min-w-min">
           <router-view />
       </div>
    </div>
</template>

<script>

export default {
    setup () {

    }
}
</script>