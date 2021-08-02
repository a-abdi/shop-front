<template>
    <div>
        ${{ currency }}
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: {
        money: Number,
    },

    setup (props) {
        const money = (props.money/1).toFixed(2).replace('.', ',')
       
        return {
           currency: computed( () => money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
        }
    },
}
</script>