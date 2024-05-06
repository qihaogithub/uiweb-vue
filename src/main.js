import { createApp } from "vue"; // 导入创建 Vue 应用的函数
import App from "./App.vue"; // 导入应用的主组件
import "./assets/styles/base.css";

import ArcoVue from "@arco-design/web-vue"; // 导入 Arco Vue 组件库
import "@arco-design/web-vue/dist/arco.css"; // 导入 Arco Vue 的样式

import { createPinia } from "pinia"; // 导入创建 Pinia 实例的函数

const pinia = createPinia(); // 创建 Pinia 状态管理实例

const app = createApp(App); // 创建 Vue 应用
app.use(ArcoVue); // 使用 ArcoVue 插件
app.use(pinia); // 使用 Pinia 状态管理
app.mount("#app"); // 将应用挂载到指定的 DOM 元素上
