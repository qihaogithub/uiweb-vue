<template>
  <div class="scale-container">
    <div class="container">
      <h2>可配置图片</h2>
      <img alt="配图" class="bgimage" :src="bgimage" />
      <h2>可配置文本</h2>
      <div class="text">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
      <h2>可配置颜色</h2>
      <div class="notice" :style="{ backgroundColor: color1 }"></div>


      <div class="tabBar">
        <img
          class="tabBar-img"
          src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F.png"
        />
      </div>
    </div>
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

const props = defineProps({
  color1: {
    type: String,
    default: '#fcf9de'
  }
});
</script>

<style scoped>
.scale-container {
  transform: scale(var(--phone-scale));
  transform-origin: left top;
}

.container {
  display: flex;
  flex-direction: column;
  width: 375px;
  padding: 20px;
  background-color: #ff9595;
}
.bgimage {
  width: 60px;
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
.notice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.125em;
  padding: 0em 0.875em;
  border-radius: 1.33333em;
  background: #fcf9de;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}

.tabBar {
  width: 100%;
  max-width: 375px;
}

.tabBar-img {
  width: 100%;
}
</style>
