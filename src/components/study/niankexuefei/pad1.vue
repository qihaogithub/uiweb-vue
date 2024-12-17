<template>
  <div class="scale-container">
    <div class="popup">
      <div class="popup-content gradation" :class="subjectClass">
        <img :src="img" />
      </div>
      <img :src="buttonImg" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
import resourceImg from "@/assets/img/学习页/年课续费/resource_img.png";
import buttonImg from "@/assets/img/学习页/年课续费/pad/按钮.png";

const img = ref(resourceImg);
const currentSubject = ref("reading");

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
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
  transform-origin: left top; /* 缩放原点 */
  transform: scale(var(--pad-scale));
  background-image: url("@/assets/img/学习页/年课续费/pad/弹窗底下的图.png");
  width: 1133px;
  height: 744px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  display: flex;
  width: 468px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: #fff;
}
.popup-content {
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 29.952px 29.952px 0px 0px;
  position: relative;
  overflow: hidden;
}
.gradation::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff00 100%);
  pointer-events: none;
}
.popup img {
  width: 100%;
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
