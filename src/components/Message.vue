<template>
    <Fadeout :fadeTime="fadeTime" :fadeOn="newMessage" @fadeOff='$emit("fadeMessage")'>
        <div 
            v-if="message"
            :class="{'bg-green-600': success, 'bg-red-600': danger, 'bg-yellow-600': warning}" 
            class="absolute text-white whitespace-nowrap text-xs md:text-sm 2xl:text-base p-2 tracking-wider border rounded-md bottom-0 right-0 shadow-lg z-10"
        >
            {{ message }}
        </div>
    </Fadeout>
</template>

<script>
import { ref, watch } from 'vue'
import Fadeout from './Fadeout.vue'
export default {
    components: {
        Fadeout
    },

    props: {
        typeMessage: {
            type: String,
            default: 'success'
        },

        message: {
            type: String,
            default: 'Successful'
        },
       
        fadeTime: {
            type: Number,
            default: 5000
        },

        showMessage: {
            type: Boolean,
            default: false
        }
    },

    setup(props) {
        const success = ref(false)
        const danger  = ref(false)
        const warning = ref(false)
        const newMessage = ref(false)

        watch( 
            () => props.typeMessage,
            type => {
                console.log(type)
                if(type == 'success') {
                    success.value = true
                    danger.value = false
                    warning.value = false
                }
        
                if(type == 'danger') {
                    success.value = false
                    danger.value = true
                    warning.value = false
                }
        
                if(type == 'warning') {
                    success.value = false
                    danger.value = false
                    warning.value = true
                }
            }
        )

        watch(
            () => props.showMessage,
            showMessage => {
                if(showMessage) {
                    newMessage.value = true
                }
                else {
                    newMessage.value = false
                }
            }
        )

        return {
            success,
            danger,
            warning,
            newMessage,
        }
    }
}
</script>