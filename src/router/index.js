import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import NotFound from "../views/NotFound.vue";

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
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFound,
    meta: {
      layout: "AppLayoutHome"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;