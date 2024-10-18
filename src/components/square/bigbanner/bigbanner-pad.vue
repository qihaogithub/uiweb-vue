<template>
  <div class="bigBanner">
    <img class="background-image" alt="Foreground Image" :src="bgimage" />

    <img class="foreground-image" alt="Background Image" :src="fgimage" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
const bgimage = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E8%83%8C%E6%99%AF%E5%9B%BE.png"
);
const fgimage = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E5%89%8D%E6%99%AF%E5%9B%BE.png"
);

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  fgimage.value = url;
});
emitter.on("updateImage2", (url) => {
  bgimage.value = url;
});
</script>
<style scoped>
.bigBanner {
  position: relative;
  width: 100%; /* 宽度继承父级盒子的宽度 */
  height: calc(100% * 0.307692307692308);
  overflow: hidden;
}
.background-image {
  position: absolute;
  width: 100%;
  min-width: 23.4375rem;
  height: auto; /* 高度自适应 */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1.25rem;
}
.foreground-image {
  position: absolute;
  width: 100%;
  min-width: 23.4375rem; /* 最小宽度375px */
  height: auto; /* 高度自适应 */
  bottom: 0rem; /* 底部对齐 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  border-radius: 1.25rem; /* 圆角20px */
}
</style>
