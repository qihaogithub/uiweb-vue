<template>
  <div class="after-class-pad">
    <!-- 状态栏和导航栏 -->
    <div class="nav-status-container">
      <div class="nav-status-container">
        <img src="@/assets/img/学习页/课后/pad/pad状态栏和导航栏.png" />
      </div>
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
        <div class="feature-row">
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
        </div>

        <div class="feature-row">
          <!-- 随堂故事 -->
          <div class="feature-item">
            <div class="feature-left">
              <img src="@/assets/img/学习页/课后/icon-2.png" />
              <div class="feature-name">随堂故事</div>
            </div>
            <div class="feature-right">
              <div class="feature-arrow"></div>
            </div>
          </div>
        </div>

        <!-- 底部链接 -->
        <div class="history-link">
          <div class="history-text">查看往期课程</div>
          <div class="history-arrow"></div>
        </div>
      </div>
    </div>
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
  bannerImage.value = imageUrl;
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
.after-class-pad {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #f5f4f4;
}

.nav-status-container {
  width: 100%;
}

.status-bar {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

.status-bar-left {
  display: flex;
  align-items: center;
}

.mobile-signal {
  width: 20px;
  height: 15px;
  position: relative;
}

.carrier-text {
  font-family: "SF Pro", sans-serif;
  font-size: 12px;
  color: #000000;
  margin-left: 5px;
}

.status-bar-center {
  font-family: "SF Pro", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #000000;
}

.status-bar-right {
  display: flex;
  align-items: center;
}

.battery-indicator {
  font-family: "SF Pro", sans-serif;
  font-size: 12px;
  color: #000000;
}

.nav-bar {
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
  background: none;
  border: none;
  cursor: pointer;
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
  padding: 0 137px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
  overflow-y: auto;
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
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.banner-placeholder {
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  border-radius: 10px;
}

.service-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  font-size: 22.5px;
  color: #4d4d4d;
}

.teacher {
  display: flex;
  align-items: center;
  gap: 5px;
}

.teacher-name {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 17.5px;
  color: #666666;
}

.teacher img {
  width: 30px;
  height: 30px;
  background-color: #fcda00;
  border-radius: 11.25px;
}

.feature-row {
  display: flex;
  gap: 20px;
  width: 100%;
}

.feature-item {
  width: 418.75px;
  height: 80px;
  background-color: #fff3eb;
  border-radius: 22.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}

.feature-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
}

.feature-left img {
  width: 45px;
  height: 45px;
  border-radius: 13.125px;
  overflow: hidden;
}

.feature-name {
  font-family: "PingFang SC", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #6b2d03;
}

.feature-right {
  display: flex;
  align-items: center;
  gap: 5px;
}

.feature-status {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 17.5px;
  color: #e35b00;
}

.feature-arrow {
  width: 20px;
  height: 20px;
  position: relative;
}

.feature-arrow::after {
  content: "";
  position: absolute;
  width: 7.7px;
  height: 15px;
  background-color: #ffa66b;
  mask: url("data:image/svg+xml,%3Csvg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.366117 0.366117C0.816722 -0.0844884 1.52576 -0.11915 2.01612 0.262131L2.13388 0.366117L6.61612 4.84835C8.022 6.25424 8.07824 8.49869 6.78482 9.97166L6.61612 10.1517L2.13388 14.6339C1.64573 15.122 0.854272 15.122 0.366117 14.6339C-0.0844884 14.1833 -0.11915 13.4742 0.262131 12.9839L0.366117 12.8661L4.84835 8.38388C5.29895 7.93328 5.33362 7.22424 4.95234 6.73388L4.84835 6.61612L0.366117 2.13388C-0.122039 1.64573 -0.122039 0.854272 0.366117 0.366117Z' fill='%23FFA66B'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: contain;
  transform: rotate(180deg) scaleY(-100%);
}

.history-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 418px;
  margin-top: 20px;
  align-self: center;
}

.history-text {
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
  font-size: 17.5px;
  color: #b2b2b2;
}

.history-arrow {
  width: 20px;
  height: 20px;
  position: relative;
}

.history-arrow::after {
  content: "";
  position: absolute;
  width: 7.7px;
  height: 15px;
  background-color: #e0dfdf;
  mask: url("data:image/svg+xml,%3Csvg width='8' height='15' viewBox='0 0 8 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.366117 0.366117C0.816722 -0.0844884 1.52576 -0.11915 2.01612 0.262131L2.13388 0.366117L6.61612 4.84835C8.022 6.25424 8.07824 8.49869 6.78482 9.97166L6.61612 10.1517L2.13388 14.6339C1.64573 15.122 0.854272 15.122 0.366117 14.6339C-0.0844884 14.1833 -0.11915 13.4742 0.262131 12.9839L0.366117 12.8661L4.84835 8.38388C5.29895 7.93328 5.33362 7.22424 4.95234 6.73388L4.84835 6.61612L0.366117 2.13388C-0.122039 1.64573 -0.122039 0.854272 0.366117 0.366117Z' fill='%23E0DFDF'/%3E%3C/svg%3E")
    no-repeat;
  mask-size: contain;
  transform: rotate(270deg) scaleY(-100%);
}
</style>
