<template>
  <div class="page">
    <div class="flex-col">
      <div class="top">
        <img :src="calendarImg" />
        <img class="pos" :src="topImg" />
      </div>
      <div class="task-card" :class="subjectClass">
        <img class="ziyuan" :src="img" />

        <div class="entrance">
          <span class="title"> 了解益智2阶系统包</span>
          <img class="arrow" :src="arrowImg" />
        </div>
      </div>
    </div>
    <img class="tabbar" :src="tabbarImg" />
  </div>
</template>

<script setup>
const props = defineProps({});
import { ref } from "vue";
import emitter from "@/utils/emitter";
import resourceImg from "@/assets/img/学习页/年课续费/resource_img.png";
import calendarImg from "@/assets/img/学习页/年课续费/card/Calendar.png";
import topImg from "@/assets/img/学习页/年课续费/card/top.png";
import tabbarImg from "@/assets/img/学习页/年课续费/card/tabbar.png";
import arrowImg from "@/assets/img/学习页/年课续费/箭头.svg";

const img = ref(resourceImg);
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
.page {
  position: relative;
  border-radius: 24px;
  height: 812px;
  overflow-y: auto;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 375px;
}
.top {
  display: flex;
  flex-direction: column;
  padding-top: 94px;
  overflow-x: hidden;
}

.pos {
  position: absolute;
  left: 0;
  right: -1px;
  top: 0;
  z-index: 1;
}
.task-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  padding: 14px 0;
  background-color: #eaf8ff;
  border-radius: 24px;
  overflow: hidden;
}
.ziyuan {
  width: 307px;
}
.rukou {
  width: 145px;
  height: 24px;
}
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 375px;
  z-index: 1;
}
.entrance {
  display: flex;
  align-items: center;
  gap: 4px;
}
.entrance .arrow {
  width: 24px;
  height: 24px;
  fill: currentColor;
  /* 默认使用 reading 主题的颜色和 filter */
  color: #6b2d03 !important;
  filter: invert(19%) sepia(85%) saturate(1011%) hue-rotate(23deg)
    brightness(93%) contrast(103%) !important;
}

/* 阅读主题 */
.subject-reading {
  background: #fff3eb !important;
  box-shadow: 0px -4px 10px 0px hsla(24, 100%, 96%, 0.96) inset !important;
}
.subject-reading .title,
.subject-reading .arrow {
  color: #6b2d03 !important;
  filter: invert(19%) sepia(85%) saturate(1011%) hue-rotate(23deg)
    brightness(93%) contrast(103%);
}
.subject-reading .subtitle {
  color: #e35b00 !important;
}

/* 益智主题 */
.subject-puzzle {
  background: #ebf9ff !important;
  box-shadow: 0px -4px 10px 0px hsla(198, 100%, 92%, 1) inset !important;
}
.subject-puzzle .title,
.subject-puzzle .arrow {
  color: #004161 !important;
  filter: invert(14%) sepia(86%) saturate(1845%) hue-rotate(182deg)
    brightness(97%) contrast(102%);
}
.subject-puzzle .subtitle {
  color: #0090d9 !important;
}

/* 美育主题 - 增加选择器特异性 */
.task-card.subject-art {
  background: #f9f5ff !important;
  box-shadow: 0px -4px 10px 0px hsla(264, 100%, 98%, 0.96) inset !important;
}
.task-card.subject-art .title {
  color: #452270 !important;
}
.task-card.subject-art .entrance .arrow {
  color: #452270 !important;
  filter: invert(14%) sepia(29%) saturate(4159%) hue-rotate(256deg)
    brightness(94%) contrast(93%) !important;
}
.task-card.subject-art .subtitle {
  color: #8d4bde !important;
}

/* 小作家主题 */
.subject-writing {
  background: #eefceb !important;
  box-shadow: 0px -4px 10px 0px hsla(109, 74%, 95%, 0.96) inset !important;
}
.subject-writing .title,
.subject-writing .arrow {
  color: #0e5200 !important;
  filter: invert(23%) sepia(93%) saturate(1311%) hue-rotate(89deg)
    brightness(94%) contrast(106%);
}
.subject-writing .subtitle {
  color: #40a12d !important;
}

/* 英语主题 */
.subject-english {
  background: #fff0f3 !important;
  box-shadow: 0px -4px 10px 0px hsla(348, 100%, 97%, 0.96) inset !important;
}
.subject-english .title,
.subject-english .arrow {
  color: #cc2d52 !important;
  filter: invert(23%) sepia(83%) saturate(2350%) hue-rotate(325deg)
    brightness(87%) contrast(88%);
}
.subject-english .subtitle {
  color: #780a23 !important;
}

/* 为每个主题单独设置箭头样式，确保优先级一致 */
.subject-reading .entrance .arrow {
  filter: invert(19%) sepia(85%) saturate(1011%) hue-rotate(23deg)
    brightness(93%) contrast(103%) !important;
}

.subject-puzzle .entrance .arrow {
  filter: invert(14%) sepia(86%) saturate(1845%) hue-rotate(182deg)
    brightness(97%) contrast(102%) !important;
}

.subject-art .entrance .arrow {
  filter: invert(14%) sepia(29%) saturate(4159%) hue-rotate(256deg)
    brightness(94%) contrast(93%) !important;
}

.subject-writing .entrance .arrow {
  filter: invert(23%) sepia(93%) saturate(1311%) hue-rotate(89deg)
    brightness(94%) contrast(106%) !important;
}

.subject-english .entrance .arrow {
  filter: invert(23%) sepia(83%) saturate(2350%) hue-rotate(325deg)
    brightness(87%) contrast(88%) !important;
}

.entrance .title {
  border-bottom: none !important;
  text-decoration: none !important;
}
</style>
