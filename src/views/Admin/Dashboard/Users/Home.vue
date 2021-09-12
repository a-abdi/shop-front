<template>
    <div class="">
        <table class="table-auto w-full border-separate border border-green-800">
            <thead>
                <tr class="">
                    <th class="table-tr">ID</th>
                    <th class="table-tr">Name</th>
                    <th class="table-tr">Email</th>
                    <th class="table-tr">Details</th>
                    <th class="table-tr">Delete</th>
                </tr>
            </thead>
            <tbody v-if="users">
                <tr v-for="( user, index ) in users.data" :key="user.id" :class="{'bg-green-200': (index + 1) % 2 }">
                    <td class="table-td"> {{ user.id }} </td>
                    <td class="table-td"> {{ user.name }} </td>
                    <td class="table-td"> {{ user.email }} </td>
                    <td class="table-td"> <router-link :to="`/admin/dashboard/users/${user.id}`"  class="btn-blue"> Details </router-link > </td>
                    <td class="table-td"> <button @click="deleteUser(user.id)" class="btn-red"> Delete </button> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup () {
        const store = useStore()

        store.dispatch('adminUsers/getUsers')

        const deleteUser = async (userId) => {
            const answer = window.confirm(
                'Do you really want to delete user?'
            )
            try {
                if(answer) {
                    await store.dispatch('adminUsers/deleteUser', userId)
                    store.dispatch('adminUsers/getUsers')
                } 
            } catch (error) {
                
            }
        }

        return {
            users: computed ( () => store.getters['adminUsers/users'] ),
            deleteUser,
        }
    }
}
</script>