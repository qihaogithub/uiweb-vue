import { createRouter, createWebHistory } from "vue-router";
import menu from "@/pages/menu.vue";
import popup from "../pages/pop-up.vue";
import square from "@/pages/square.vue";
import mine from "@/pages/mine.vue";
import TaskCard from "@/pages/study/TaskCard.vue";
import CalendarKuoke from "@/pages/study/CalendarKuoke.vue";

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
      path: "/TaskCard",
      component: TaskCard,
    },
    {
      path: "/CalendarKuoke",
      component: CalendarKuoke,
    },

    {
      path: "/xinnianke",
      component: () => import("@/pages/study/xinnianke.vue"),
    },

    {
      path: "/HomeActivityCard",
      component: () => import("@/pages/study/HomeActivityCard.vue"),
    },
    {
      path: "/bottom-pop-up",
      component: () => import("@/pages/bottom-pop-up.vue"),
    },
  ],
});

export default router;
