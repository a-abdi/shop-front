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
        return {
           currency: computed( () => ((props.money/1).toFixed(2).replace('.', ',')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")),
        }
    },
}
</script>