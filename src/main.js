import { createApp } from "vue"; // 导入创建 Vue 应用的函数
import App from "./App.vue"; // 导入应用的主组件
import "./assets/styles/base.css";

import { createPinia } from "pinia"; // 导入创建 Pinia 实例的函数
import router from "./router/router";
import "@icon-park/vue-next/styles/index.css";

import axios from "axios";
axios.defaults.baseURL = "https://picui.cn/api/v1";

const pinia = createPinia(); // 创建 Pinia 状态管理实例
const app = createApp(App); // 创建 Vue 应用

app.use(router); // 使用路由

app.use(pinia); // 使用 Pinia 状态管理
app.mount("#app"); // 将应用挂载到指定的 DOM 元素上
