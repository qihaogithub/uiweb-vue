<template>
  <div class="main">
    <div v-for="(route, index) in routes" :key="index" class="box">
      <router-link :to="route.path" style="color: #404040">
        <img :src="route.image" :alt="route.title" />
        <div class="box-title">{{ route.title }}</div>
      </router-link>
    </div>

    <!-- 根据域名判断是否显示底部文字 -->
    <div v-if="shouldShowFooterText" class="footer-text">
      <div class="footer-links">
        <a href="http://10.130.33.131:3001/" target="_blank" class="link-item">
          <span class="link-label">局域网网址（推荐）：</span>
          <span class="link-url">10.130.33.131:3001</span>
        </a>
        <span class="divider">|</span>
        <a
          href="https://jojo-preview.netlify.app/"
          target="_blank"
          class="link-item"
        >
          <span class="link-label">公网网址（备用）：</span>
          <span class="link-url">jojo-preview.netlify.app</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import kuokeImage from "@/assets/img/目录页/扩科卡片.png";
import xinniankeImage from "@/assets/img/目录页/开启新年课.png";
import HomeActivityCard from "@/assets/img/目录页/首页活动卡片.png";
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
    path: "/HomeActivityCard",
    image: HomeActivityCard,
    title: "学习页活动卡片",
  },
  {
    path: "/xinnianke",
    image: xinniankeImage,
    title: "学习页新年课",
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
  {
    path: "/bottom-pop-up",
    image:
      "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E7%9B%AE%E5%BD%95%E9%A1%B5/%E5%BA%95%E9%83%A8%E5%BC%B9%E7%AA%97_3c58fec3.png",
    title: "底部弹窗",
  },
]);

const shouldShowFooterText = computed(() => {
  const hostname = window.location.hostname;

  // 方案1：指定域名完全匹配
  // return hostname === 'example.com';

  // 方案2：匹配多个指定域名
  return [
    "127.0.0.1",
    "188.8.12.201",
    "jojo-preview.netlify.app",
    "https://www.jojoui.work/",
  ].includes(hostname);

  // 方案3：匹配特定后缀
  // return hostname.endsWith('.example.com');

  // 方案4：排除特定开发环境
  // return !['188.8.12.201'].includes(hostname);
  // return !['localhost', '127.0.0.1'].includes(hostname);

  // 方案5：组合判断（示例：排除本地环境且必须是特定域名）
  // return !['localhost', '127.0.0.1'].includes(hostname) && hostname.endsWith('.example.com');
});
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
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: start;
  padding: min(200px, calc((100vh - 600px) / 2)) 0;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto;
}

.box {
  width: 170px;
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
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
}

.footer-text {
  width: 100%;
  text-align: center;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  font-size: 14px;
  color: #666;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.link-item {
  text-decoration: none;
  color: #666;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.link-item:hover {
  color: #1890ff;
}

.link-label {
  font-weight: 500;
}

.link-url {
  color: #1890ff;
}

.divider {
  color: #ddd;
  font-weight: 300;
}
</style>
