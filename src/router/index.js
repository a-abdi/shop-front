import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Cart from "../views/User/Cart.vue"
import Product from "../views/Product.vue"
import NotFound from "../views/NotFound.vue"
import UserRegister from "../views/User/Register.vue"
import UserLogin from "../views/User/Login.vue"
import AdminLogin from "../views/Admin/Login.vue"
import AdminDashboard from "../views/Admin/Dashboard/Index.vue"
import AdminProducts from "../views/Admin/Dashboard/Products/Index.vue"
import AdminProductsHome from "../views/Admin/Dashboard/Products/Home.vue"
import AdminUsers from "../views/Admin/Dashboard/Users.vue"
import AdminCarts from "../views/Admin/Dashboard/Carts.vue"
import AdminCategories from "../views/Admin/Dashboard/Categories.vue"
import AdminAddProduct from "../views/Admin/Dashboard/Products/Create.vue"
import AdminShowProduct from "../views/Admin/Dashboard/Products/Show.vue"
import AdminResetPassword from "../views/Admin/ResetPassword.vue"
import AdminForgotPassword from "../views/Admin/ForgotPassword.vue"

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
    path: "/admin/reset-password/:token",
    name: "AdminResetPassword",
    component: AdminResetPassword,
    meta: {
      layout: "AppLayoutAdmin",
      rrequiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => AdminGuest(next)
  },

  {
    path: "/admin/forgot-password",
    name: "AdminForgotPassword",
    component: AdminForgotPassword,
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
    },
    children: [
      {
        path: "users",
        component: AdminUsers
      },

      {
        path: "products",
        component: AdminProducts,
        children: [
          {
            path: '',
            component: AdminProductsHome
          },

          {
            path: "create",
            component: AdminAddProduct
          },

          {
            path: ":productId(\\d+)",
            component: AdminShowProduct
          },
        ]
      },

      {
        path: "carts",
        component: AdminCarts
      },

      {
        path: "categories",
        component: AdminCategories
      },
    ]
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