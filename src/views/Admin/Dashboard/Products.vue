<template>
    <div>
       <div class="flex justify-between w-full h-10 bg-gray-300">
           <div class="ml-4 flex justify-items-center my-auto tracking-wider cursor-pointer">
               Search
           </div>
           <div class="flex justify-items-center mr-4">
               <router-link to="/admin/dashboard/products/add" class="my-auto px-2 py-1 rounded-md tracking-wider bg-gray-400 text-white hover:bg-gray-600"> add Product</router-link>
           </div>
       </div>
       <div>
           <router-view></router-view>
       </div>
    </div>
</template>