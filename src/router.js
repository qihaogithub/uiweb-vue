// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
// 导入其他页面组件

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    // 定义其他路由
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;