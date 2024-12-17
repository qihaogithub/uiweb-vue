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
          <div class="renewal-card" :class="subjectClass">
            <img :src="img" />
            <div class="entrance">
              <span> 了解益智2阶系统包</span>
              <img src="@/assets/img/学习页/年课续费/箭头.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="tabBar" src="@\assets\img\学习页\任务卡片\底部标签栏-pad.png" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
const img = ref("/src/assets/img/学习页/年课续费/pad/年课续费-pad.png");
const currentSubject = ref("reading");
// 上传组件组件注册事件监听
emitter.on("updateImage2", (url) => {
  img.value = url;
});
// 监听科目更新事件
emitter.on("updateSubject", (subject) => {
  currentSubject.value = subject;
});
// 根据科目计算样式类名
const subjectClass = computed(() => {
  return `subject-${currentSubject.value}`;
});
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

/* 阅读主题 */
.subject-reading {
  background: #fff3eb !important;
  box-shadow: 0px -4px 10px 0px hsla(24, 100%, 96%, 0.96) inset !important;
}
.subject-reading .title {
  color: #6b2d03 !important;
}
.subject-reading .subtitle {
  color: #e35b00 !important;
}

/* 益智主题 */
.subject-puzzle {
  background: #ebf9ff !important;
  box-shadow: 0px -4px 10px 0px hsla(198, 100%, 92%, 1) inset !important;
}
.subject-puzzle .title {
  color: #004161 !important;
}
.subject-puzzle .subtitle {
  color: #0090d9 !important;
}

/* 美育主题 */
.subject-art {
  background: #f9f5ff !important;
  box-shadow: 0px -4px 10px 0px hsla(264, 100%, 98%, 0.96) inset !important;
}
.subject-art .title {
  color: #452270 !important;
}
.subject-art .subtitle {
  color: #8d4bde !important;
}

/* 小作家主题 */
.subject-writing {
  background: #eefceb !important;
  box-shadow: 0px -4px 10px 0px hsla(109, 74%, 95%, 0.96) inset !important;
}
.subject-writing .title {
  color: #0e5200 !important;
}
.subject-writing .subtitle {
  color: #40a12d !important;
}

/* 英语主题（原有样式） */
.subject-english {
  background: #fff0f3 !important;
  box-shadow: 0px -4px 10px 0px hsla(348, 100%, 97%, 0.96) inset !important;
}
.subject-english .title {
  color: #cc2d52 !important;
}
.subject-english .subtitle {
  color: #780a23 !important;
}
</style>
