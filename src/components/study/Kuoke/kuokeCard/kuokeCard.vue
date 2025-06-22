<template>
  <div class="task-card" :class="subjectClass">
    <div class="neirong">
      <img alt="配图" :src="bgimage" />
      <div class="text">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>

    <button class="participate-button">立即体验</button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import emitter from "@/utils/emitter";

const bgimage = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/%E7%B4%A0%E6%9D%90%E5%9B%BE.png"
);

const title = ref('趣味英语训练营');
const subtitle = ref('沉浸体验 激发兴趣');

const currentSubject = ref('english'); // 默认英语

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
  padding: 0px 14px;
  align-items: center;
  align-content: center;
  border-radius: 24px;
  gap: 0 8px;
  background: #fff0f3;
  box-shadow: 0px -4px 10px 0px #FFE5EB inset;
}
.task-card img {
  width: 60px;
  height: 60px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  height: 100%;

}
.neirong {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
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
.participate-button {
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

/* 阅读主题 */
.subject-reading {
  background: #FFF3EB !important;
  box-shadow: 0px -4px 10px 0px hsla(24, 100%, 96%, 0.96) inset !important;
}
.subject-reading .title {
  color: #6B2D03 !important;
}
.subject-reading .subtitle {
  color: #E35B00 !important;
}

/* 益智主题 */
.subject-puzzle {
  background: #EBF9FF !important;
  box-shadow: 0px -4px 10px 0px hsla(198, 100%, 92%, 1) inset !important;
}
.subject-puzzle .title {
  color: #004161 !important;
}
.subject-puzzle .subtitle {
  color: #0090D9 !important;
}

/* 美育主题 */
.subject-art {
  background: #F9F5FF !important;
  box-shadow: 0px -4px 10px 0px hsla(264, 100%, 98%, 0.96) inset !important;
}
.subject-art .title {
  color: #452270 !important;
}
.subject-art .subtitle {
  color: #8D4BDE !important;
}

/* 小作家主题 */
.subject-writing {
  background: #EEFCEB !important;
  box-shadow: 0px -4px 10px 0px hsla(109, 74%, 95%, 0.96) inset !important;
}
.subject-writing .title {
  color: #0E5200 !important;
}
.subject-writing .subtitle {
  color: #40A12D !important;
}

/* 英语主题（原有样式） */
.subject-english {
  background: #FFF0F3 !important;
  box-shadow: 0px -4px 10px 0px hsla(348, 100%, 97%, 0.96) inset !important;
}
.subject-english .title {
  color: #CC2D52 !important;
}
.subject-english .subtitle {
  color: #780A23 !important;
}
</style>
