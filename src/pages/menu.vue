<template>
  <div class="main">
    <!-- 合并搜索栏和标签筛选栏到同一行 -->
    <div class="search-filter-container">
      <!-- 标签筛选栏 -->
      <div class="tag-filter">
        <div
          v-for="category in uniqueCategories"
          :key="category"
          :class="['tag-item', selectedTag === category ? 'active' : '']"
          @click="selectedTag = category"
        >
          {{ categoryNameMap[category] || category }}
        </div>
        <div
          :class="['tag-item', selectedTag === 'all' ? 'active' : '']"
          @click="selectedTag = 'all'"
        >
          全部
        </div>
      </div>

      <!-- 搜索栏 -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchKeyword"
          placeholder="搜索页面..."
          class="search-input"
        />
      </div>
    </div>

    <div v-for="(route, index) in filteredRoutes" :key="index" class="box">
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
import pagesConfig from "@/config/pages.json";
import kuokeImage from "@/assets/img/目录页/扩科卡片.png";
import xinniankeImage from "@/assets/img/目录页/开启新年课.png";
import HomeActivityCard from "@/assets/img/目录页/首页活动卡片.png";

// 添加搜索和筛选相关响应式变量
const searchKeyword = ref('');
const selectedTag = ref('all');

// 添加标签名称映射表 - 在这里自定义标签名称
const categoryNameMap = {
  // 示例: 'original-category': '自定义名称',
  // 'study': '学习中心',
  // 'activity': '活动专区',
};

// 从配置文件加载页面路由
const configRoutes = pagesConfig.pages.map(page => ({
  path: page.path,
  image: page.image.startsWith('@/') ? 
    // 处理本地图片路径
    page.image === '@/assets/img/目录页/扩科卡片.png' ? kuokeImage :
    page.image === '@/assets/img/目录页/开启新年课.png' ? xinniankeImage :
    page.image === '@/assets/img/目录页/首页活动卡片.png' ? HomeActivityCard :
    page.image : page.image,
  title: page.title,
  category: page.category
}))

// 手动维护的特殊路由
const specialRoutes = ref([
  // {
  //   path: "/popup",
  //   image: "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/目录页/通用弹窗.png",
  //   title: "通用弹窗",
  //   category: "special"
  // }
])

// 合并所有路由
const routes = computed(() => {
  return [...configRoutes, ...specialRoutes.value]
})

const shouldShowFooterText = computed(() => {
  const hostname = window.location.hostname;


  return [
    "127.0.0.1",
    "188.8.12.201",
    "jojo-preview.netlify.app",
    "https://www.jojoui.work/",
  ].includes(hostname);


});

// 修改路由数据处理逻辑，添加筛选功能
const filteredRoutes = computed(() => {
  return [...configRoutes, ...specialRoutes.value]
    .filter(route => {
      // 搜索筛选
      const matchesSearch = route.title.toLowerCase().includes(searchKeyword.value.toLowerCase());
      // 标签筛选
      const matchesTag = selectedTag.value === 'all' || route.category === selectedTag.value;
      return matchesSearch && matchesTag;
    });
});

// 获取所有唯一的分类标签
const uniqueCategories = computed(() => {
  const categories = [...configRoutes, ...specialRoutes.value]
    .map(route => route.category)
    .filter(Boolean);
  return [...new Set(categories)];
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

/* 添加搜索栏样式 */
.search-bar {
  grid-column: 1 / -1; /* 横跨所有列 */
  width: 100%;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #1890ff;
}

/* 添加标签筛选栏样式 */
.tag-filter {
  grid-column: 1 / -1; /* 横跨所有列 */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.tag-item {
  padding: 6px 12px;
  background-color: #fff;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.tag-item.active {
  background-color: #1890ff;
  color: white;
}

.tag-item:hover:not(.active) {
  background-color: #e8f0fe;
}

/* 修改为同一行布局 */
.search-filter-container {
  grid-column: 1 / -1; /* 横跨所有列 */
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
}

.tag-filter {
  flex: 1; /* 标签栏占据剩余空间 */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.search-bar {
  width: 300px; /* 固定搜索栏宽度 */
}
</style>
