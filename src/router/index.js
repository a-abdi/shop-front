import { createWebHistory, createRouter } from "vue-router"
import AuthUser from "../middlewares/beforeEachAuthUser"
import AuthAdmin from "../middlewares/beforeEachAuthAdmin"
import UserGuest from "../middlewares/beforeEnterGuestUser"
import AdminGuest from "../middlewares/beforeEnterGuestAdmin"

const routeOptions = [
  //*---------------------------------------------------------------------------------------
  // public route
  //*---------------------------------------------------------------------------------------
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/products/:productId",
    name: "Product",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  //*---------------------------------------------------------------------------------------
  // user route
  //*---------------------------------------------------------------------------------------
  {
    path: "/register",
    name: "User/Auth/Register",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
  },
  
  {
    path: "/login",
    name: "User/Auth/Login",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
  },
  
  {
    path: "/forgot-password",
    name: "User/Auth/ForgotPassword",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
  },
  
  {
    path: "/reset-password/:token",
    name: "User/Auth/ResetPassword",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => UserGuest(next)
  },

  {
    path: "/cart",
    name: "User/Cart",
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },

  //*---------------------------------------------------------------------------------------
  // admin route
  //*---------------------------------------------------------------------------------------
  {
    path: "/admin/login",
    name: "Admin/Auth/Login",
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => AdminGuest(next)
  },

  {
    path: "/admin/reset-password/:token",
    name: "Admin/Auth/ResetPassword",
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => AdminGuest(next)
  },

  {
    path: "/admin/forgot-password",
    name: "Admin/Auth/ForgotPassword",
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    },
    beforeEnter: (to, from, next) => AdminGuest(next)
  },
  
  {
    path: "/admin/dashboard",
    name: "Admin/Dashboard/Index",
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: true,
    },
    children: [
      {
        path: "users",
        name: "Admin/Dashboard/Users",
        component: () => import("../views/Admin/Dashboard/Users.vue"),
      },

      {
        path: "products",
        name: "Admin/Dashboard/Products/Index",
        component: () => import("../views/Admin/Dashboard/Products/Index.vue"),
        children: [
          {
            path: "",
            name: "Admin/Dashboard/Products/Home",
            component: () => import("../views/Admin/Dashboard/Products/Home.vue"),
          },

          {
            path: "create",
            name: "Admin/Dashboard/Products/Create",
            component: () => import("../views/Admin/Dashboard/Products/Create.vue"),
          },

          {
            path: ":productId(\\d+)",
            name: "Admin/Dashboard/Products/Show",
            component: () => import("../views/Admin/Dashboard/Products/Show.vue"),
          },
        ]
      },

      {
        path: "categories",
        name: "Admin/Dashboard/Categories/Index",
        component: () => import("../views/Admin/Dashboard/Categories/Index.vue"),
        children: [
          {
            path: "",
            name: "Admin/Dashboard/Categories/Home",
            component: () => import("../views/Admin/Dashboard/Categories/Home.vue"),
          },

          {
            path: "create",
            name: "Admin/Dashboard/Categories/Create",
            component: () => import("../views/Admin/Dashboard/Categories/Create.vue"),
          },

          {
            path: ":categoryId(\\d+)",
            name: "Admin/Dashboard/Categories/Show",
            component: () => import("../views/Admin/Dashboard/Categories/Show.vue"),
          },
        ]
      },

      {
        path: "carts",
        name: "Admin/Dashboard/Carts",
        component: () => import("../views/Admin/Dashboard/Carts.vue"),
      },
    ]
  },
]

//*---------------------------------------------------------------------------------------
const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`../views/${route.name}.vue`)
  }
})

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