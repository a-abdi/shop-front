<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="table-tr">ID</th>
                    <th class="table-tr">Name</th>
                    <th class="table-tr" v-if="showDetails" >Description</th>
                    <th class="table-tr">Details</th>
                    <th class="table-tr">Edit</th>
                </tr>
            </thead>
            <tbody v-if="categories">
                <tr v-for="( category, index ) in categories.data" :key="category.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="table-td"> {{ category.id }} </td>
                    <td class="table-td"> {{ category.name }} </td>
                    <td class="table-td" v-if="showDetails"> {{ category.description }} </td>
                    <td class="table-td"> <button class="btn-blue" @click="showDetails = !showDetails"><span v-if="!showDetails">Show</span> <span v-if="showDetails">Hide</span> </button> </td>
                    <td class="table-td">  <router-link :to="`/admin/dashboard/categories/${category.id}/edit`" class="btn-yellow"> Edit </router-link> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
    setup () {
        const store = useStore()
        const showDetails = ref(false)

        store.dispatch('adminCategories/getCategories')

        return {
            categories: computed ( () => store.getters['adminCategories/categories'] ),
            showDetails
        }
    }
}
</script>