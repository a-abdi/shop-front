import { createWebHistory, createRouter } from "vue-router"
import AuthUser from "../middlewares/beforeEachAuthUser"
import AuthAdmin from "../middlewares/beforeEachAuthAdmin"
import UserGuest from "../middlewares/beforeEnterGuestUser"
import AdminGuest from "../middlewares/beforeEnterGuestAdmin"
import Dashboard from  "../views/Admin/Dashboard/Index.vue"

const routes = [
  //*---------------------------------------------------------------------------------------
  // public route
  //*---------------------------------------------------------------------------------------
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/products/:productId",
    name: "Product",
    component: () => import("../views/Product.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: false,
      requiresAuthAdmin: false,
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: () => import("../views/NotFound.vue"),
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
    component: () => import("../views/User/Auth/Register.vue"),
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
    component: () => import("../views/User/Auth/Login.vue"),
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
    component: () => import("../views/User/Auth/ForgotPassword.vue"),
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
    component: () => import("../views/User/Auth/ResetPassword.vue"),
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
    component: () => import("../views/User/Cart.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/order/error",
    name: "User/Order/Error",
    component: () => import("../views/User/Order/Error.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/order/success",
    name: "User/Order/Success",
    component: () => import("../views/User/Order/Success.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/profile",
    name: "User/Profile",
    component: () => import("../views/User/Profile.vue"),
    meta: {
      layout: "AppLayoutUser",
      requiresAuthUser: true,
      requiresAuthAdmin: false,
    }
  },

  {
    path: "/settings",
    name: "User/Settings",
    component: () => import("../views/User/Settings.vue"),
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
    component: () => import("../views/Admin/Auth/Login.vue"),
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
    component: () => import("../views/Admin/Auth/ResetPassword.vue"),
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
    component: () => import("../views/Admin/Auth/ForgotPassword.vue"),
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
    component: Dashboard,
    meta: {
      layout: "AppLayoutAdmin",
      requiresAuthUser: false,
      requiresAuthAdmin: true,
    },
    children: [
      {
        path: "users",
        name: "Admin/Dashboard/Users/Index",
        component: () => import("../views/Admin/Dashboard/Users/Index.vue"),
         
        children: [
          {
            path: "",
            name: "Admin/Dashboard/Users/Home",
            component: () => import("../views/Admin/Dashboard/Users/Home.vue"),
          },

          {
            path: ":userId(\\d+)",
            name: "Admin/Dashboard/Users/Show",
            component: () => import("../views/Admin/Dashboard/Users/Show.vue"),
          },
        ]
        
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
            path: ":productId(\\d+)/edit",
            name: "Admin/Dashboard/Products/Edit",
            component: () => import("../views/Admin/Dashboard/Products/Edit.vue"),
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
            path: ":categoryId(\\d+)/edit",
            name: "Admin/Dashboard/Categories/Edit",
            component: () => import("../views/Admin/Dashboard/Categories/Edit.vue"),
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
// const routes = routeOptions.map(route => {
//   return {
//     ...route,
//     component: () => import(`../views/${route.name}.vue`)
//   }
// })

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