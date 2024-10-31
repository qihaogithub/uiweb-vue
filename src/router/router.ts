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
      path: "/size",
      component: () => import("../components/尺寸检查/批量尺寸检查.vue"),
    },
  ],
});

export default router;
