<template>
      <div class="form-base">
        <div class="form-design">
            <div class="form-title">
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