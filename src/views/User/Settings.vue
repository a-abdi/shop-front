<template>
    <div class="w-full my-4 text-xs lg:text-sm">
        <div class="w-full lg:mx-auto lg:w-10/12 border border-gray-200 rounded shadow-lg">
            <div class="flex">
                <div class="flex w-1/2 justify-between items-center px-4 my-4 border-r border-gray-300">
                    <div class="w-4/6">
                        <span class="text-gray-600 mr-4"><label for="name">Name</label></span>
                        <span class="text-purple-600"> {{ user.data.name }} </span>
                    </div>
                    <ModalDialog 
                        :show="showEdit.name" 
                        :error="form.errorUser" 
                        @cancel="showEdit.name = false" 
                        @updated="updateUser({
                            password: $event, 
                            name :form.new_name
                        })">
                        <template #title>
                            Change Name
                        </template>
                        <div class="my-4 text-purple-600">
                            <label for="new_name">new name</label>
                            <input v-model="form.new_name" id="new_name" type="text" class="mt-1 form-input">
                        </div>
                    </ModalDialog>
                    <ButtonEdit @clicked="showEdit.name = true, form.errorUser = null" />
                </div>
                <div class="flex w-1/2 justify-between items-center px-4 my-4">
                    <div class="w-4/6">
                        <span class="text-gray-600 mr-4"><label for="name">Email</label></span>
                        <span class="text-purple-600"> {{ user.data.email }} </span>
                    </div>
                    <ModalDialog 
                    :show="showEdit.email" 
                    :error="form.errorUser"
                    @cancel="showEdit.email = false" 
                    @updated="updateUser({
                        password: $event, 
                        email :form.new_email
                    })">
                        <template #title>
                            Change email
                        </template>
                        <div class="my-4 text-purple-600">
                            <label for="email">new email</label>
                            <input v-model="form.new_email" id="email" type="text" class="mt-1 form-input">
                        </div>
                    </ModalDialog>
                    <ButtonEdit @clicked="showEdit.email = true, form.errorUser = null" />
                </div>
            </div>
            <Border />
            <div class="flex">
                <div class="flex w-1/2 justify-between items-center px-4 my-4 border-r border-gray-300">
                    <div class="w-4/6">
                        <span class="text-gray-600 mr-4"><label for="password">Password</label></span>
                        <span class="text-purple-600"> ******** </span>
                    </div>
                    <ModalDialog  
                        :show="showEdit.password" 
                        :error="form.errorUser"
                        @cancel="showEdit.password = false" 
                        @updated="updateUser({
                            password: $event, 
                            new_password: form.new_password, 
                            new_password_confirmation: form.new_password_confirmation
                        })">
                        <template #title>
                            Change password
                        </template>
                        <div class="my-4 text-purple-600">
                            <label for="new_password">new password</label>
                            <input v-model="form.new_password" id="new_password" type="password" class="mt-1 form-input">
                        </div>
                        <div class="my-4 text-purple-600">
                            <label for="new_password_confirm">new password confirm</label>
                            <input v-model="form.new_password_confirmation" id="new_password_confirm" type="password" class="mt-1 form-input">
                        </div>
                    </ModalDialog>
                    <ButtonEdit @clicked="showEdit.password = true, form.errorUser = null" />
                </div>
                <div class="flex w-1/2 justify-between items-center px-4 my-4">
                    <div class="my-2" :class="{'w-1/6': showEdit.phone, 'w-4/6': !showEdit.phone}">
                        <span class="text-gray-600 mr-4"><label for="phone">Phone</label></span>
                        <span class="text-purple-600" v-show="!showEdit.phone"> {{ user.data.information.phone_number }} </span>
                    </div>
                    <div class="w-4/6 px-2">
                        <input @change="updateInformation({phone_number: form.phone_number}), showEdit.phone = false" v-model="form.phone_number" v-show="showEdit.phone" id="phone" type="phone" class="form-input" placeholder="Phone Number">
                    </div>
                    <ButtonEdit @clicked="showEdit.phone = !showEdit.phone" />
                </div>
            </div>
            <Border />
            <div class="flex">
                <div class="flex w-1/2 justify-between items-center px-4 my-4 border-r border-gray-300">
                    <div>
                        <span class="text-gray-600 mr-4"><label for="gender">Gender</label></span>
                        <span class="text-purple-600"> 
                            <button @click="updateInformation({gender: 'male'})" class="p-2 border border-purple-400 rounded-l focus:outline-none" :class="{'bg-purple-500 text-white': user.data.information.gender == 'male'}">Male</button>
                            <button @click="updateInformation({gender: 'other'})" class="p-2 border border-r-0 border-l-0 border-purple-400 focus:outline-none" :class="{'bg-purple-500 text-white': user.data.information.gender == 'other'}">other</button>
                            <button @click="updateInformation({gender: 'female'})" class="p-2 border border-purple-400 rounded-r focus:outline-none" :class="{'bg-purple-500 text-white': user.data.information.gender == 'female'}">Female</button>
                        </span>
                    </div>
                </div>
                <div class="flex w-1/2 justify-between items-center px-4 my-4">
                    <div :class="{'w-1/6': showEdit.birthday, 'w-4/6': !showEdit.birthday}">
                        <span class="text-gray-600 mr-4"><label for="birthday">birthday</label></span>
                        <span class="text-purple-600" v-show="!showEdit.birthday"> {{ user.data.information.birthday }} </span>
                    </div>
                    <div class="w-4/6 px-2">
                        <input @change="updateInformation({birthday: form.birthday}), showEdit.birthday = false" v-model="form.birthday" v-show="showEdit.birthday" id="birthday" type="date" class="form-input" placeholder="Birthday">
                    </div>
                    <ButtonEdit @clicked="showEdit.birthday = !showEdit.birthday" />
                </div>
            </div>
            <Border />
            <div class="flex w-full justify-between items-center px-4 my-4">
                <div class="my-2" :class="{'w-1/6': showEdit.address, 'w-4/6': !showEdit.address}">
                    <span class="text-gray-600 mr-4"><label for="address">Address</label></span>
                    <span class="text-purple-600" v-show="!showEdit.address"> {{ user.data.information.address }} </span>
                </div>
                <div class="w-10/12">
                    <input @change="updateInformation({address: form.address}), showEdit.address = false" v-model="form.address" v-show="showEdit.address" id="address" type="address" class="form-input" placeholder="Address">
                </div>
                <ButtonEdit @clicked="showEdit.address = !showEdit.address" />
            </div>
            <Border />
            <div class="flex w-full justify-between items-center px-4 my-4">
                <div class="w-3/6">
                    <span class="text-gray-600 mr-4"><label for="image">Profile image</label></span>
                </div>
                <div class="w-3/6">
                    <input @change="onImageChange" id="image" type="file" class="form-input">
                </div>
            </div>
            <ErrorMessage class="mb-4" :error="form.errorInfo" />
        </div>
        <Message 
            class="absolute bottom-4 right-4"
            :message="message" 
            :showMessage="showMessage"
            :typeMessage="typeMessage"
            :fadeTime="10000"
            @fadeMessage="showMessage = false"
        />
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import ModalDialog from '../../components/ModalDialog.vue'
import Border from '../../components/Border.vue'
import ButtonEdit from '../../components/ButtonEdit.vue'
import ErrorMessage from '../../components/ErrorMessage.vue'
import Message from '../../components/Message.vue'

export default {
    components: {
        ModalDialog,
        Border,
        ButtonEdit,
        ErrorMessage,
        Message,
    },

    setup () {
        const store = useStore()
        const message = ref(null)
        const showMessage = ref(false)
        const typeMessage = ref(null)
        const showEdit = reactive({
            name: false,
            email: false,
            password: false,
            phone: false,
            birthday: false,
            address: false,
        })

        const user = computed(() => store.getters['userAuth/user'])

        const form = reactive({
            new_name: null,
            new_email: null,
            new_password: null,
            new_password_confirmation: null,
            phone_number: user.value.data.information.phone_number,
            birthday: user.value.data.information.birthday,
            address: user.value.data.information.address,
            image: null,
            errorUser: null,
            errorInfo: null,
        })

        const onImageChange = (e) => {
            const file = e.target.files[0]
            const formData = new FormData()
            formData.append('image', file)
            updateInformation(formData)
        }
        
        const updateInformation = async (userData) => {
            try {
                await store.dispatch('userAuth/personalInformation', userData)
                showMessage.value = true
                message.value = 'Setting saved.'
                typeMessage.value = 'success'
            }
            catch (error) {
                form.errorInfo = error.response.data
            }
        }

        const updateUser = async (userData) => {
            form.error = null
            try {
                await store.dispatch('userAuth/userUpdate', userData)
                showEdit.name = false
                showEdit.email = false
                showEdit.password = false
            }
            catch (error) {
                form.errorUser = error.response.data
            }
        }

        return {
            user,
            showEdit,
            form,
            updateUser,
            updateInformation,
            onImageChange,
            showMessage,
            message,
            typeMessage
        }
    }
}
</script>