<template>
      <div class="h-full w-full mt-4 sm:mt-8 md:mt-16 lg:mt-24">
        <div class="w-11/12 sm:w-1/2 lg:w-1/3 mx-auto border border-gray-200 rounded-md">
            <div class="text-base p-4 text-gray-600 mb-6 border-b border-gray-200">
                <slot name="title"></slot>
            </div>
            <div class="text-sm text-gray-600 mb-1 px-4">
                <label for="password">Password</label>
            </div>
            <div class="px-4">
                 <slot name="password"></slot>
            </div>
            <div class="text-sm text-gray-600 mt-6 mb-1 px-4">
                <label for="confirm_password">Confirm password</label>
            </div>
            <div class="px-4">
                 <slot name="confirm"></slot>
            </div>
            <div class="w-full px-4 mb-4">
                 <slot name="btn"></slot>
            </div>
              <div class="w-full px-4 mb-4">
                 <slot name="message"></slot>
            </div>
        </div>
    </div>
</template>