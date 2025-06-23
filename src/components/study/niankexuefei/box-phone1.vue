<template>
  <DeviceContainer device-type="phone">
    <div class="page">
    <div class="flex-col">
      <div class="section" :class="subjectClass">
        <img class="image" :src="img" />
        <div class="relative gradation"></div>
      </div>
      <img class="image_2" :src="buttonImg" />
      <img class="image_3" :src="tabbarImg" />
    </div>
  </div>
  </DeviceContainer>
</template>

<script setup>

import DeviceContainer from "@/components/common/DeviceContainer.vue";
const props = defineProps({});
import { ref } from "vue";
import emitter from "@/utils/emitter";
import resourceImg from "@/assets/img/学习页/年课续费/resource_img.png";
import buttonImg from "@/assets/img/学习页/年课续费/button.png";
import tabbarImg from "@/assets/img/学习页/年课续费/tabbar.png";


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


<style scoped lang="css">
.page {
  background-image: url("@/assets/img/学习页/年课续费/bg.png");
  width: 100%;
  height: 812px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
.flex-col {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
}
.section {
  padding-top: 20px;
  background-color: #eaf8ff;
  border-radius: 24px 24px 0 0px;
  overflow: hidden;
}
.image {
  margin-left: 21px;
  margin-right: 18px;
  width: 335px;
}
.gradation {
  margin-top: -40px;
  background-image: linear-gradient(0deg, #ffffff 0%, #ffffff00 100%);
  height: 60px;
}
.image_2 {
  width: 100%;
}
.image_3 {
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
