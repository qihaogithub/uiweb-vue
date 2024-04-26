
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/base.css'

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';


// Vue 3 的新特性，用于创建和挂载 Vue 应用
createApp(App).mount('#app')

app.use(ArcoVue);
