<template>
    <div :style="{ opacity: opacity }">
        <slot />
    </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    props: {
        fadeTime: {
            type: Number,
            default: 10000
        },

        fadeStep: {
            type: Number,
            default: 40
        },

        fadeOn: {
            type: Boolean,
            default: false
        },
    },

    emits: ['fadeOff'],

    setup(props, { emit }) {
        const opacity = ref(1)
        const timeOut = ref(0)
        const opacityID = ref([])

        const run = () => {
            timeOut.value  = 0
            for (let index = 0; index < props.fadeStep; index++) {
                opacityID.value[index] = setTimeout(() => {
                    opacity.value = 1 - index/props.fadeStep
                }, timeOut.value)
                
                timeOut.value += props.fadeTime/props.fadeStep
            }
            emit('fadeOff')
        }

        const stop = () => {
            for (let index = 0; index < props.fadeStep; index++) {
                clearTimeout(opacityID.value[index])
            }
            opacity.value = 0
        }

        watch( 
            () => props.fadeOn,
            fadeOn => {
                if(fadeOn) {
                    stop()
                    run()
                }
            }
        )

        return {
            opacity
        }
    }
}
</script>