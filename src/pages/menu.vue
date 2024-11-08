<template>
  <div class="main">
    <div v-for="(route, index) in routes" :key="index" class="box">
      <router-link :to="route.path" style="color: #404040">
        <img :src="route.image" :alt="route.title" />
        <div class="box-title">{{ route.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import kuokeImage from "@/assets/img/目录页/扩科卡片.png";
// import squareImage from '@/assets/img/目录页/广场页.png'
// import taskImage from '@/assets/img/学习页/学习页.png'

const routes = ref([
  {
    path: "/square",
    image:
      "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E7%9B%AE%E5%BD%95%E9%A1%B5/%E5%B9%BF%E5%9C%BA%E9%A1%B5.png",
    title: "广场",
  },
  {
    path: "/TaskCard",
    image:
      "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%AD%A6%E4%B9%A0%E9%A1%B5.png",
    title: "学习页任务卡片",
  },
  {
    path: "/CalendarKuoke",
    image: kuokeImage,
    title: "学习页日历扩科卡片",
  },
  {
    path: "/mine",
    image:
      "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E7%9B%AE%E5%BD%95%E9%A1%B5/%E6%88%91%E7%9A%84%E9%A1%B5.png",
    title: "我的",
  },
  {
    path: "/popup",
    image:
      "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E7%9B%AE%E5%BD%95%E9%A1%B5/%E9%80%9A%E7%94%A8%E5%BC%B9%E7%AA%97.png",
    title: "通用弹窗",
  },
]);
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
}

.main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.box {
  width: 200px;
  margin: 10px;
  border-radius: 1.25rem;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

.box img {
  border-radius: 1rem;
  max-width: 100%;
  height: auto;
}

.box:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.box-title {
  font-size: 1.2rem;
  margin-top: 10px;
  text-align: center;
}
</style>
