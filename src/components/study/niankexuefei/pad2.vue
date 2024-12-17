<template>
  <div class="scale-container">
    <img class="top" src="@/assets/img/通用/状态栏/状态栏-pad.png" />
    <img class="top" src="@/assets/img/学习页/年课续费/pad/顶部按钮.png" />
    <div class="column">
      <div class="two-columns">
        <div class="left-column">
          <img src="@/assets/img/学习页/年课续费/pad/日历.png" />
        </div>
        <div class="right-column">
          <span class="date">9月15日 </span>
          <div class="renewal-card">
            <img src="@/assets/img/学习页/年课续费/pad/年课续费-pad.png" />
            <div class="entrance">
              <span> 了解益智2阶系统包</span>
              <img src="@/assets/img/学习页/年课续费/pad/箭头.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="tabBar" src="@\assets\img\学习页\任务卡片\底部标签栏-pad.png" />
  </div>
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard.vue";
</script>

<style scoped>
/* 缩放效果 */
.scale-container {
  height: 744px;
  transform-origin: left top;
  transform: scale(var(--pad-scale));
}
img {
  width: 100%;
}

.top {
  width: 1133px;
}
.column {
  display: flex;
  flex-direction: column;
  width: 1133px;
  padding: 0 40px;
}

.tabBar {
  width: 1133px;
  z-index: 999;
  position: fixed;
  bottom: 0;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.left-column {
  display: flex;
  flex-direction: column;
  width: 375px;
  /* background: #000; */
}
.kuoke-card {
  width: 100%;
}
.right-column {
  flex: 1;
}
.date {
  color: #404040;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 48px */
}
.renewal-card {
  display: flex;
  margin-top: 16px;
  width: 678px;
  padding: 14px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background: #fff3eb;
}
.entrance {
  display: flex;
  justify-content: center;
  align-items: center;
}
.entrance span {
  color: #e35b00;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "PingFang SC";
  font-size: 17.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 26.25px */
}
.entrance img {
  width: 30px;
  height: 30px;
}
.tabBar {
  width: 1133px;
  z-index: 999;
  position: fixed; /* 改为 fixed */
  bottom: 0;
}
</style>
