<template>
  <div class="task-card" :class="subjectClass">
    <div class="neirong">
      <img alt="配图" :src="bgimage" />
      <div class="text">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <img alt="复选框" class="checkbox" :src="checkboxImg" />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import emitter from "@/utils/emitter";
import zyimg from "@/assets/img/学习页/首页活动卡片/资源配图.png";
import checkboxImg from "@/assets/img/学习页/首页活动卡片/复选框.png";
const bgimage = ref(zyimg);
const title = ref("主标题文案");
const subtitle = ref("副标题文案");
const buttonText = ref("按钮文案");
const currentSubject = ref("yellow"); // 默认英语
// 监听标题更新事件
emitter.on("updateTitle", (newTitle) => {
  title.value = newTitle;
});

// 监听副标题更新事件
emitter.on("updateSubtitle", (newSubtitle) => {
  subtitle.value = newSubtitle;
});

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  bgimage.value = url;
});

// 监听科目更新事件
emitter.on("updateSubject", (subject) => {
  currentSubject.value = subject;
});

// 监听按钮文案更新事件
emitter.on("updateButtonText", (newButtonText) => {
  buttonText.value = newButtonText;
});

// 根据科目计算样式类名
const subjectClass = computed(() => {
  return `subject-${currentSubject.value}`;
});
</script>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  height: 88px;
  padding-right: 14px;
  align-items: center;
  border-radius: 24px;
  overflow: hidden; /* 裁切内部元素 */
}
.neirong {
  display: flex;
  align-items: center;
  gap: 12px;
}
.neirong img {
  width: 100px;
}
.checkbox {
  width: 40px;
  height: 40px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  height: 100%;
}

.title {
  color: #780a23;
  font-size: 16px;
  line-height: 1.2;
  height: auto;
  font-weight: 600;
}

.subtitle {
  color: #cc2d52;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
}
.ppurpleicipate-button {
  color: #6b430b;
  text-align: center;
  border: none;
  padding: 7px 12px;
  border-radius: 25px;
  background-color: #fcda00;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
}

/* 黄色主题 */
.subject-yellow {
  background: #fcf9de !important;
  /* box-shadow: 0px -4px 10px 0px hsla(24, 100%, 92%, 0.96) inset !important; */
}
.subject-yellow .title {
  color: #544300 !important;
}
.subject-yellow .subtitle {
  color: #dbaf00 !important;
}

/* 阅读主题 */
.subject-puzzle {
  background: #fff3eb !important;
  /* box-shadow: 0px -4px 10px 0px hsla(24, 100%, 92%, 0.96) inset !important; */
}
.subject-puzzle.title {
  color: #6b2d03 !important;
}
.subject-puzzle .subtitle {
  color: #e35b00 !important;
}
/* 棕色 */
.subject-brown {
  background: #fef7e5 !important;
  /* box-shadow: 0px -4px 10px 0px hsla(24, 100%, 92%, 0.96) inset !important; */
}
.subject-brown.title {
  color: #664314 !important;
}
.subject-brown .subtitle {
  color: #986c31 !important;
}
/* 益智主题 */
.subject-blue {
  background: #ebf9ff !important;
  /* box-shadow: 0px -4px 10px 0px hsla(198, 100%, 88%, 1) inset !important; */
}
.subject-blue .title {
  color: #004161 !important;
}
.subject-blue .subtitle {
  color: #0090d9 !important;
}

/* 美育主题 */
.subject-purple {
  background: #f9f5ff !important;
  /* box-shadow: 0px -4px 10px 0px hsla(264, 100%, 94%, 0.96) inset !important; */
}
.subject-purple .title {
  color: #452270 !important;
}
.subject-purple .subtitle {
  color: #8d4bde !important;
}

/* 小作家主题 */
.subject-green {
  background: #eefceb !important;
  /* box-shadow: 0px -4px 10px 0px hsla(109, 74%, 91%, 0.96) inset !important; */
}
.subject-green .title {
  color: #0e5200 !important;
}
.subject-green .subtitle {
  color: #40a12d !important;
}

/* 英语主题（原有样式） */
.subject-pink {
  background: #fff0f3 !important;
  /* box-shadow: 0px -4px 10px 0px hsla(348, 100%, 93%, 0.96) inset !important; */
}
.subject-pink .title {
  color: #780a23 !important;
}
.subject-pink .subtitle {
  color: #cc2d52 !important;
}

/* 红色 */
.subject-red {
  background: #fff2f0 !important;
  /* box-shadow: 0px -4px 10px 0px hsla(348, 100%, 93%, 0.96) inset !important; */
}
.subject-red .title {
  color: #781a0c !important;
}
.subject-red .subtitle {
  color: #cc2f16 !important;
}

/* 草色 */
.subject-grassy {
  background: #fbfce8 !important;
  /* box-shadow: 0px -4px 10px 0px hsla(66, 80%, 89%, 0.96) inset !important; */
}
.subject-grassy .title {
  color: #3d4200 !important;
}
.subject-grassy .subtitle {
  color: #a9b52d !important;
}
/* 青色 */
.subject-cyan {
  background: #edfbfc !important;
  /* box-shadow: 0px -4px 10px 0px hsla(186, 80%, 92%, 0.96) inset !important; */
}
.subject-cyan .title {
  color: #00484f !important;
}
.subject-cyan .subtitle {
  color: #009aa8 !important;
}
</style>
