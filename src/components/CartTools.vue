<template>
    <div class="w-full flex">
        <div class="flex px-2.5 py-1 border border-gray-200 rounded-md">
            <button @click='$emit("updateCart", { quantity: cart.quantity - 1, id: cart.id })' :disabled="cart.quantity == 1" :class="{'text-red-200': cart.quantity == 1, 'text-red-600': cart.quantity > 1}" class="focus:outline-none px-0.5">
                <IconRemove />
            </button>
            <div class="px-0.5">{{ cart.quantity }}</div>
            <button @click='$emit("updateCart", { quantity: cart.quantity + 1, id: cart.id })' :disabled="cart.quantity == 5" :class="{'text-red-200': cart.quantity == 5, 'text-red-600': cart.quantity < 5}"  class="focus:outline-none px-0.5">
                <IconAdd />
            </button>
        </div>
        <div class="px-2.5 py-1.5 ml-2">
            <button @click='$emit("deleteCart", cart.id)' class="flex text-gray-600 focus:outline-none">
                <IconDelete /> 
                <span class="px-2">
                    Delete
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import IconDelete from '~icons/wpf/delete.vue'
import IconAdd from '~icons/mi/add.vue'
import IconRemove from '~icons/mi/remove.vue'

export default {
    components: {
        IconAdd,
        IconRemove,
        IconDelete,
    },

    props: {
        cart: {
            type: Object,
            required: true
        }
    }, 
}
</script>