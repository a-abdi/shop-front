import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Cart from "../views/User/Cart.vue"
import Product from "../views/Product.vue"
import NotFound from "../views/NotFound.vue"
import UserRegister from "../views/User/Register.vue"
import UserLogin from "../views/User/Login.vue"
import AdminLogin from "../views/Admin/Login.vue"
import AdminDashboard from "../views/Admin/Dashboard.vue"

// middlewares
import AuthUser from "../middlewares/beforeEachAuthUser"
import AuthAdmin from "../middlewares/beforeEachAuthAdmin"
import UserGuest from "../middlewares/beforeEnterGuestUser"
import AdminGuest from "../middlewares/beforeEnterGuestAdmin"

const routes = [
  //*---------------------------------------------------------------------------------------
  // user route
  //*---------------------------------------------------------------------------------------
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },
  
  {
    path: "/register",
    name: "Register",
    component: UserRegister,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
  },
  
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
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
      rrequiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => AdminGuest(next)
  },
  
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: true,
    }
  },
  
  //*---------------------------------------------------------------------------------------
  // public route
  //*---------------------------------------------------------------------------------------
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },
  
  {
    path: "/products/:productId",
    name: "Product",
    component: Product,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound,
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },
];

//*---------------------------------------------------------------------------------------

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  return AuthUser(to)
})

router.beforeEach((to, from) => {
  return AuthAdmin(to)
})


export default router