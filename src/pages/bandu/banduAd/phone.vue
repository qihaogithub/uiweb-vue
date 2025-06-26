<template>
  <div class="container">
    <!-- 顶部内容 -->
    <div class="header">
      <img
        src="@/assets/img/伴读/轮播广告/手机/底部吸顶内容.png"
        alt="顶部背景"
      />
    </div>
    <!-- 主要内容区域 -->
    <div class="content">
      <div class="top">
        <img src="@/assets/img/伴读/轮播广告/手机/重磅更新标题.png" />
        <img :src="adImage1" alt="广告图" />
        <img src="@/assets/img/伴读/轮播广告/手机/叫叫活动标题.png" />
      </div>
      <!-- 广告图容器 -->
      <div class="ad-container">
        <img :src="adImage3" alt="广告图" />
      </div>
      <div class="bottom">
        <img src="@/assets/img/伴读/轮播广告/手机/下.png" />
      </div>
    </div>
    <!-- 底部导航栏 -->
    <div class="tab-bar">
      <img
        src="@/assets/img/伴读/轮播广告/手机/吸底标签栏.png"
        alt="顶部背景"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import emitter from "@/utils/emitter";
import defaultAdImage1 from "@/assets/img/伴读/轮播广告/手机/一行一个广告图.png";
import defaultadImage3 from "@/assets/img/伴读/轮播广告/手机/广告图.png";
// 广告图片
const adImage1 = ref(defaultAdImage1);
const adImage3 = ref(defaultadImage3);

// 处理广告图更新
const handleAdImageUpdate1 = (imageUrl) => {
  adImage1.value = imageUrl || defaultAdImage1;
};
const handleAdImageUpdate2 = (imageUrl) => {
  adImage3.value = imageUrl || defaultadImage3;
};

// 组件挂载时添加事件监听
onMounted(() => {
  // 监听资源更新事件，根据配置中的资源ID为1
  emitter.on("updateImage1", handleAdImageUpdate1);
  emitter.on("updateImage3", handleAdImageUpdate2);
});

// 组件卸载前移除事件监听
onBeforeUnmount(() => {
  emitter.off("updateImage1", handleAdImageUpdate);
  emitter.off("updateImage3", handleAdImageUpdate);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 375px;
  height: 812px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
}

.header img {
  position: absolute;
  width: 375px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100.02% 575.18%;
  z-index: 2;
}

.content {
  position: absolute;
  width: 375px;
  height: 585px;
  left: 0;
  top: 141px;
  overflow-x: clip;
  overflow-y: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top img {
  width: 344px;
  aspect-ratio: 10px;
}

.ad-container {
  width: 344px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #d9d9d9;
}

.ad-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom img {
  width: 375px;
  background-position: 50% 67.32%;
  background-repeat: no-repeat;
  background-size: 100.06% 201.99%;
  flex-shrink: 0;
}

.tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 375px;
  z-index: 2;
}

.tab-bar img {
  width: 100%;
  height: 86px;
}
</style>
