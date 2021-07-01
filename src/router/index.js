import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;