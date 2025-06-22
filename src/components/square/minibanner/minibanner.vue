<template>
  <div class="miniBanner">
    <img
      v-for="(src, index) in newUrls"
      :key="index"
      :src="src"
      :alt="`Mini Banner ${index + 1}`"
      class="miniBannerImage"
    />
    <img
      v-for="(src, index) in imageUrls"
      :key="index"
      :src="src"
      :alt="`Mini Banner ${index + 1}`"
      class="miniBannerImage"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";

const imageUrls = ref([
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D01.png",
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D02.png",
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D05.png",
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D04.png",
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D06.png",
]);
const newUrls = ref([]);
// 上传组件组件注册事件监听
emitter.on("updateImage3", uploadUrl);
function uploadUrl(urls) {
  //翻转数组中内容的顺序
  const reversedUrls = [...urls].reverse();
  newUrls.value = reversedUrls;
}
</script>

<style scoped>
.miniBanner {
  display: flex;
  margin-top: 1em;
  padding: 0 1.25em;
  height: 5.69563em;
  gap: 0.7em;
  overflow-x: auto; /* 允许横向滚动 */
  scroll-snap-type: x mandatory; /* 滚动时对齐子元素 */
}
/* 隐藏整个滚动条 */
.miniBanner::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.miniBanner img {
  width: auto;
}
.miniBannerFirst {
  width: 100%;
  height: 100%;
}
</style>
