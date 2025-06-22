import { createRouter, createWebHistory } from "vue-router";
import menu from "@/pages/menu.vue";
import DynamicPage from "@/components/DynamicPage.vue";
import pagesConfig from "@/config/pages.json";

// 静态路由
const staticRoutes = [
  {
    path: "/",
    component: menu,
  },
  {
    path: "/menu",
    component: menu,
  }
]

// 动态生成路由
const dynamicRoutes = pagesConfig.pages.map(page => ({
  path: page.path,
  component: DynamicPage,
  meta: {
    pageId: page.id,
    title: page.title
  }
}))

// 保留现有的特殊页面路由
const specialRoutes = [
  {
    path: "/popup",
    component: () => import("@/pages/pop-up.vue"),
  },
  {
    path: "/bottom-pop-up",
    name: "bottom-pop-up",
    component: () => import("@/components/DynamicPage.vue"),
    props: { pageId: "bottomPopUp" }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...staticRoutes,
    ...dynamicRoutes,
    ...specialRoutes
  ],
});

export default router;
