<template>
  <div class="bigBanner">
    <img class="background-image" alt="Foreground Image" :src="bgimage" />

    <img class="foreground-image" alt="Background Image" :src="fgimage" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
const bgimage = ref("/src/assets/img/广场页/大banner/banner_背景图.png");
const fgimage = ref("/src/assets/img/广场页/大banner/banner_前景图.png");

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
  overflow: hidden;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 89.5833333333333%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1em;
  object-fit: cover;
}
.foreground-image {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0em;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
}
</style>
