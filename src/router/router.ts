import { createRouter, createWebHistory } from 'vue-router'
import menu from "@/pages/menu.vue";
import DynamicPage from "@/components/DynamicPage.vue";
import pagesConfig from "@/config/pages";

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

// 特殊路由（如果需要的话）
const specialRoutes = [
  // 在这里添加特殊路由配置
  // 例如：404页面、错误页面等
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...staticRoutes,
    ...dynamicRoutes
  ],
});

export default router;
