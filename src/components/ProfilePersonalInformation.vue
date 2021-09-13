<template>
    <div class="text-xs md:text-sm mt-4">
        <Border />
        <div>
            <div class="text-sm md:text-base px-4 py-1 text-gray-600">
                Personal Information
            </div>
            <div class="w-10/12 flex mx-auto">
                <div class="w-3/4">
                    <ShowFlide :value="user.name"> 
                        name 
                    </ShowFlide>
                    <ShowFlide :value="user.email"> 
                        email 
                    </ShowFlide>
                    <ShowFlide v-if="user.information.phone_number" :value="user.information.phone_number">
                        phone 
                    </ShowFlide>
                    <ShowFlide v-if="user.information.gender" :value="user.information.gender">
                        gender 
                    </ShowFlide>
                        <ShowFlide v-if="user.information.birthday" :value="user.information.birthday">
                        birthday 
                    </ShowFlide>
                        <ShowFlide v-if="user.information.address" :value="user.information.address">
                        address 
                    </ShowFlide>
                </div>
                <div v-if="user.information.image_src" class="w-1/4">
                    <img :src="user.information.image_src" alt="profile image" class="w-auto h-auto min-w-full max-w-64 max-h-64 mx-auto">
                </div>
            </div>
        </div>
        <Border />
    </div> 
</template>

<script>
import Border from './Border.vue'
import ShowFlide from './ShowFlide.vue'

export default {
    components: {
        Border,
        ShowFlide,
    },

    props: {
        user: Object,
    },

    setup () {

        return {

        }
    }
}
</script>