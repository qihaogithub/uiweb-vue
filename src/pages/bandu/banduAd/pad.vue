<template>
  <div class="container">
    <!-- 顶部内容 -->
    <div class="header">
      <img
        src="@/assets/img/伴读/轮播广告/pad/底部吸顶内容.png"
        alt="顶部背景"
      />
    </div>
    <!-- 主要内容区域 -->
    <div class="content">
      <!-- 顶部区域 -->
      <div class="section-1">
        <img src="@/assets/img/伴读/轮播广告/pad/1.png" />
      </div>

      <!-- 中间区域 -->
      <div class="section-2">
        <!-- <img src="@/assets/img/伴读/轮播广告/pad/一行1个.png" /> -->
        <img :src="adImage2" alt="广告图" />
      </div>

      <!-- 底部区域 -->
      <div class="section-3">
        <div class="divider">
          <img src="@/assets/img/伴读/轮播广告/pad/配图-1.png" />
        </div>
        <div class="image-container">
          <!-- 广告图容器 -->
          <div class="ad-container">
            <img :src="adImage3" alt="广告图" />
          </div>

          <div class="image-item">
            <img src="@/assets/img/伴读/轮播广告/pad/配图-3.png" />
          </div>
          <div class="image-item">
            <img src="@/assets/img/伴读/轮播广告/pad/配图-4.png" />
          </div>
          <div class="image-item">
            <img src="@/assets/img/伴读/轮播广告/pad/配图-5.png" />
          </div>
          <div class="image-item">
            <img src="@/assets/img/伴读/轮播广告/pad/配图-6.png" />
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <div class="tab-bar">
      <img src="@/assets/img/伴读/轮播广告/pad/吸底标签栏.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import emitter from "@/utils/emitter";
import defaultadImage2 from "@/assets/img/伴读/轮播广告/pad/一行1个.png";
import defaultAdImage3 from "@/assets/img/伴读/轮播广告/手机/广告图.png";

// 广告图片
const adImage2 = ref(defaultadImage2);
const adImage3 = ref(defaultAdImage3);

// 处理广告图更新
const handleAdImageUpdate1 = (imageUrl) => {
  adImage2.value = imageUrl || defaultadImage2;
};
const handleAdImageUpdate2 = (imageUrl) => {
  adImage3.value = imageUrl || defaultAdImage3;
};

// 组件挂载时添加事件监听
onMounted(() => {
  // 监听资源更新事件，根据配置中的资源ID为1
  emitter.on("updateImage2", handleAdImageUpdate1);
  emitter.on("updateImage3", handleAdImageUpdate2);
});

// 组件卸载前移除事件监听
onBeforeUnmount(() => {
  emitter.off("updateImage2", handleAdImageUpdate1);
  emitter.off("updateImage3", handleAdImageUpdate2);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 1133px;
  height: 749px;
  background-color: #ffffff;
  position: relative;
}

.header img {
  position: absolute;
  width: 1132px;
  height: 90px;
  left: 1px;
  top: 0;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100.03% 943.33%;
  z-index: 2;
}

.content {
  position: absolute;
  width: 1133px;
  height: 592px;
  left: 0;
  top: 90px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-1 img {
  width: 100%;
  aspect-ratio: 1132/188;
  background-position: 50% 30.26%;
  background-repeat: no-repeat;
  background-size: 100.03% 451.6%;
  flex-shrink: 0;
}
.section-2 {
  border-radius: 12px;
  overflow: hidden;
}

.section-2 img {
  width: 1005px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  flex-shrink: 0;
}

.section-3 {
  width: 1133px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
}

.divider img {
  width: 1133px;
  height: 61px;
}

.image-container {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 64px;
  gap: 10px;
}

.ad-container img {
  width: 210px;
  height: 100%;
  border-radius: 9px;
  overflow: hidden;
  background-color: #d9d9d9;
}

.image-item img {
  height: 100px;
  border-radius: 9px;
  background-repeat: no-repeat;
}

.tab-bar img {
  position: absolute;
  width: 1132px;
  height: 62px;
  left: 1px;
  bottom: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
}
</style>
