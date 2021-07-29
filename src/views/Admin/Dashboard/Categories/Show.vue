<template>
    <div v-if="category" class="w-full">
        
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup () {
        const route = useRoute()
        const store = useStore()
        const categoryId = route.params.categoryId

        store.dispatch('adminCategories/getCategory', categoryId)

        return {
            category: computed ( () => store.getters['adminCategories/category'] ),
        }
    }
}
</script>