import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutUser"
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: "AppLayoutUser"
    }
  },

  {
    path: "/products/:productId",
    name: "Product",
    component: Product,
    meta: {
      layout: "AppLayoutUser"
    }
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      layout: "AppLayoutUser"
    }
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: "AppLayoutUser"
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound,
    meta: {
      layout: "AppLayoutUser"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;