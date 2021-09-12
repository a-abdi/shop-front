<template>
    <div>
        <PersonalInformation :user="user.data" />
    </div> 
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PersonalInformation from '../../components/ProfilePersonalInformation.vue'

export default {
    components: {
        PersonalInformation,
    },

    setup () {
        const store = useStore()

        return {
            user: computed(() => store.getters['userAuth/user'])
        }
    }
}
</script>