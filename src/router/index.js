import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import checkAuth from "../middlewares/beforeEachAuth"
import checkGuest from "../middlewares/beforeEnterGuest"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: true,
    }
  },

  {
    path: "/products/:productId",
    name: "Product",
    component: Product,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,
    }
  },

  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: true,
    }
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,
    },
    beforeEnter: (to, from, next) => checkGuest(next)
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,     
    },
    beforeEnter: (to, from, next) => checkGuest(next)
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  return checkAuth(to)
})

export default router