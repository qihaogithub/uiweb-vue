<template>
  <div class="small_ad" :style="{ backgroundColor: color1 }">
    <img :src="leftImg" />
    <img :src="rightImg" />
  </div>
</template>
<script setup>
import emitter from "@/utils/emitter";
import { ref } from "vue";
defineProps(["color1"]);

const leftImg = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E6%88%91%E7%9A%84%E9%A1%B5/%E8%B5%84%E6%BA%90/%E5%B9%BF%E5%91%8A%E5%9B%BE_%E5%B7%A6.png"
);
const rightImg = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E6%88%91%E7%9A%84%E9%A1%B5/%E8%B5%84%E6%BA%90/%E5%B9%BF%E5%91%8A%E5%9B%BE_%E5%8F%B3.png"
);
// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  leftImg.value = url;
});
emitter.on("updateImage2", (url) => {
  rightImg.value = url;
});
</script>
<style scoped>
.small_ad {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.125em;
  padding: 0em 0.875em;
  border-radius: 1.33333em;
  background: #fcf9de;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}
img {
  height: 100%;
}
</style>
