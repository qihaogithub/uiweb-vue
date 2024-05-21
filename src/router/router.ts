import { createRouter, createWebHistory } from "vue-router";
import menu from "@/pages/menu.vue";
import popup from "../pages/pop-up.vue";
import test from "@/components/test/ceshi.vue";
import square from "@/pages/square.vue";
import mine from "@/pages/mine.vue";

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
      path: "/square",
      component: square,
    },
    {
      path: "/mine",
      component: mine,
    },
    {
      path: "/test",
      component: test,
    },
  ],
});

export default router;
