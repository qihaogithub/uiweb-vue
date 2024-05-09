import { createRouter, createWebHistory } from "vue-router";
import menu from "../pages/menu.vue";
import popup from "../pages/pop-up.vue";
import test from "../pages/test.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: menu,
    },
    {
      path: "/menu",
      component: menu,
    },
    {
      path: "/popup",
      component: popup,
    },
    {
      path: "/test",
      component: test,
    },
  ],
});

export default router;
