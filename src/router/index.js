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
      layout: "AppLayoutHome"
    }
  },

  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: "AppLayoutAbout"
    }
  },

  {
    path: "/products/:productId",
    name: "Product",
    component: Product,
    meta: {
      layout: "AppLayoutHome"
    }
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      layout: "AppLayoutGuest"
    }
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: "AppLayoutGuest"
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound,
    meta: {
      layout: "AppLayoutGuest"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;