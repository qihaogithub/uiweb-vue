<template>
  <!-- 状态栏和导航栏 -->
  <div class="nav-status-container">
    <img src="@/assets/img/学习页/课后/手机/原生/导航&状态.png" />
  </div>

  <!-- 主要内容 -->
  <div class="main-content">
    <!-- 广告图容器 -->
    <div class="banner-container">
      <img
        v-if="bannerImage"
        :src="bannerImage"
        alt="课后服务广告图"
        class="banner-image"
      />
      <div v-else class="banner-placeholder"></div>
    </div>

    <!-- 服务内容区域 -->
    <div class="service-content">
      <!-- 标题区 -->
      <div class="content-header">
        <div class="content-title">全年系统包-L1</div>
        <div class="teacher">
          <div class="teacher-name">苹果指导师</div>
          <img src="@/assets/img/学习页/课后/指导师头像.png" />
        </div>
      </div>

      <!-- 功能入口列表 -->
      <div class="feature-list">
        <!-- 学习报告 -->
        <div class="feature-item">
          <div class="feature-left">
            <img src="@/assets/img/学习页/课后/icon.png" />
            <div class="feature-name">学习报告</div>
          </div>
          <div class="feature-right">
            <div class="feature-status">3篇报告未读</div>
            <div class="feature-arrow"></div>
          </div>
        </div>

        <!-- 活动挑战 -->
        <div class="feature-item">
          <div class="feature-left">
            <img src="@/assets/img/学习页/课后/icon-1.png" />
            <div class="feature-name">活动挑战</div>
          </div>
          <div class="feature-right">
            <div class="feature-arrow"></div>
          </div>
        </div>

        <!-- 趣味复习 -->
        <div class="feature-item">
          <div class="feature-left">
            <img src="@/assets/img/学习页/课后/icon-2.png" />
            <div class="feature-name">趣味复习</div>
          </div>
          <div class="feature-right">
            <div class="feature-arrow"></div>
          </div>
        </div>
      </div>

      <!-- 底部链接 -->
      <div class="history-link">
        <div class="history-text">查看往期课程服务</div>
        <div class="history-arrow"></div>
      </div>
    </div>
  </div>

  <!-- 底部指示条 -->
  <div class="indicator-bar">
    <div class="indicator"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import emitter from "@/utils/emitter";
import defaultAdImage from "@/assets/img/学习页/课后/banner.png";
// 响应式数据
const bannerImage = ref(defaultAdImage);

/**
 * 处理广告图更新
 * @param {string} imageUrl - 图片URL
 */
const handleBannerUpdate = (imageUrl) => {
  bannerImage.value = imageUrl || defaultAdImage;
};
/**
 * 组件挂载时的初始化
 */
onMounted(() => {
  // 监听广告图更新事件
  emitter.on("updateImage1", handleBannerUpdate);
});
</script>

<style scoped>
.nav-status-container img {
  width: 100%;
}

.status-bar {
  width: 100%;
  height: 44px;
}

.nav-bar {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.back-button {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  width: 24px;
  height: 24px;
  position: relative;
}

.back-icon::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 18px;
  background-color: #404040;
  mask: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.43934 0.43934C0.980066 -0.101386 1.83091 -0.14298 2.41935 0.314557L2.56066 0.43934L7.93934 5.81802C9.6264 7.50508 9.69389 10.1984 8.14179 11.966L7.93934 12.182L2.56066 17.5607C1.97487 18.1464 1.02513 18.1464 0.43934 17.5607C-0.101386 17.0199 -0.14298 16.1691 0.314557 15.5807L0.43934 15.4393L5.81802 10.0607C6.35875 9.51993 6.40034 8.66909 5.9428 8.08065L5.81802 7.93934L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934Z' fill='%23404040'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: contain;
  transform: rotate(180deg) scaleY(-100%);
}

.nav-bar-title {
  font-family: "PingFang SC", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  line-height: 1.5;
  text-align: center;
}

.main-content {
  flex: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 20px;
  overflow-y: hidden; /* 隐藏滚动条 */
}

.banner-container {
  width: 100%;
  height: 112px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.banner-image {
  width: 100%;
  height: 112px;
  object-fit: cover;
}

.banner-placeholder {
  width: 100%;
  height: 100%;
  background-color: #cccccc;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.content-title {
  font-family: "PingFang SC", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #4d4d4d;
}

.teacher {
  display: flex;
  align-items: center;
  gap: 4px;
}

.teacher-name {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #666666;
}

.teacher img {
  width: 24px;
  height: 24px;
  background-color: #fcda00;
  border-radius: 9px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.feature-item {
  width: 100%;
  height: 64px;
  background-color: #fff3eb;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.feature-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
}

.feature-left img {
  width: 36px;
  height: 36px;
  border-radius: 10.5px;
  overflow: hidden;
}

.feature-name {
  font-family: "PingFang SC", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #6b2d03;
}

.feature-right {
  display: flex;
  align-items: center;
  gap: 4px;
}

.feature-status {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #e35b00;
}

.feature-arrow {
  width: 16px;
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-arrow::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 12px;
  background-color: #ffa66b;
  mask: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.292893 0.292893C0.653377 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5.29289 3.87868C6.4176 5.00339 6.46259 6.79895 5.42786 7.97733L5.29289 8.12132L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0675908 11.3466 -0.0953203 10.7794 0.209705 10.3871L0.292893 10.2929L3.87868 6.70711C4.23916 6.34662 4.26689 5.77939 3.96187 5.3871L3.87868 5.29289L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z' fill='%23FFA66B'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: contain;
  top: 50%;
  transform: translateY(-50%);
}

.history-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 10px;
}

.history-text {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #b2b2b2;
}

.history-arrow {
  width: 16px;
  height: 16px;
  position: relative;
}

.history-arrow::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 12px;
  background-color: #e0dfdf;
  mask: url("data:image/svg+xml,%3Csvg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.292893 0.292893C0.653377 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5.29289 3.87868C6.4176 5.00339 6.46259 6.79895 5.42786 7.97733L5.29289 8.12132L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0675908 11.3466 -0.0953203 10.7794 0.209705 10.3871L0.292893 10.2929L3.87868 6.70711C4.23916 6.34662 4.26689 5.77939 3.96187 5.3871L3.87868 5.29289L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z' fill='%23E0DFDF'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: contain;
  transform: rotate(270deg) scaleY(-100%);
}

.indicator-bar {
  width: 100%;
  height: 34px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator {
  width: 134px;
  height: 5px;
  background-color: #000000;
  border-radius: 100px;
}
</style>
