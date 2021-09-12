<template>
    <teleport to='body'>
        <transition enter-active-class="transition ease-out duration-200 transform" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-200 transform" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="showModal" ref="modal-backdrop" class="fixed z-10 inset-0 overflow-y-auto bg-gray-400 bg-opacity-25">
                <div class="flex items-start justify-center min-h-screen pt-24 text-center">
                    <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl p-4 w-1/2" role="dialog" ref="modal" aria-modal="true" aria-labelledby="modal-headline">
                       <button @click="closeModal" class="absolute top-4 right-4 text-red-600 focus:outline-none">
                            <icon-close />
                        </button>
                       <div class="absolute top-4 left-4 text-sm md:text-base text-gray-600">
                           <slot name="title">Modal Dialog</slot>
                       </div>
                       <div class="mt-10 mb-16 text-xs md:text-sm">
                           <div class="my-4 text-purple-600">
                                <label>passwrod</label>
                                <input v-model="password" type="password" class="mt-1 form-input">
                            </div>
                           <slot>Content</slot>
                            <ErrorMessage class="my-4" :error="error" />
                       </div>
                       <div class="absolute bottom-4 right-4 text-xs md:text-sm">
                            <button @click="update" class="btn-blue mr-4">Update</button>
                            <button @click="closeModal" class="btn-red">Cancel</button>
                       </div>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>   
</template>

<script>
import { ref, watch } from 'vue'
import IconClose from "/@vite-icons/mdi/close.vue"
import ErrorMessage from './ErrorMessage.vue'

export default {
    name: "ModalDialog",
    props: {
        show: {
            type: Boolean,
            default: false,
        },

        error: {
            type: Object,
            default: null,
        }
    },

    emits: ['cancel', 'updated', 'password'],

    components: {
        IconClose,
        ErrorMessage,
    },

    setup(props, { emit }) {
        const showModal = ref(false)
        const password = ref(null)

        watch(
            () => props.show,
            show => {
                showModal.value = show
            }
        )

        const closeModal = () => {
           emit('cancel')
        }

        const update = () => {
            emit('updated', password.value )
        }

        return {
            update,
            showModal,
            closeModal,
            password,
        }
    }
}
</script>