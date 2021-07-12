import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Cart from "../views/User/Cart.vue"
import Product from "../views/Product.vue"
import NotFound from "../views/NotFound.vue"
import UserRegister from "../views/User/Register.vue"
import UserLogin from "../views/User/Login.vue"
import checkAuth from "../middlewares/beforeEachAuth"
import checkGuest from "../middlewares/beforeEnterGuest"
import AdminLogin from "../views/Admin/Login.vue"
import AdminDashboard from "../views/Admin/Dashboard.vue"

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
    component: UserRegister,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,
    },
    beforeEnter: (to, from, next) => checkGuest(next)
  },

  {
    path: "/login",
    name: "Login",
    component: UserLogin,
    meta: {
      layout: "AppLayoutUser",
      requiresAuth: false,     
    },
    beforeEnter: (to, from, next) => checkGuest(next)
  },

  //*---------------------------------------------------------------------------------------
  // admin route
  //*---------------------------------------------------------------------------------------
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuth: false,     
    },
    beforeEnter: (to, from, next) => checkGuest(next)
  },

  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuth: false,  
    }
  },

  //*---------------------------------------------------------------------------------------
  // public route
  //*---------------------------------------------------------------------------------------
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