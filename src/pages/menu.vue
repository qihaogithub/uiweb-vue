<template>
  <div class="main">
    <div v-for="(route, index) in routes" :key="index" class="box">
      <router-link :to="route.path">
        <img :src="route.image" :alt="route.title" />
        <div class="box-title">{{ route.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const routes = ref([
  {
    path: "/square",
    image: "src/assets/img/目录页/广场页.png",
    title: "广场",
  },
  {
    path: "/mine",
    image: "src/assets/img/目录页/我的页.png",
    title: "我的",
  },
  {
    path: "/popup",
    image: "src/assets/img/目录页/通用弹窗.png",
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
