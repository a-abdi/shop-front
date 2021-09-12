import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from'./router'
import store from'./store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClickAway from "vue3-click-away";

createApp(App)
.use(router)
.use(store)
.use(VueAxios, axios)
.use(VueClickAway)
.mount('#app')
