<template>
  <div class="page">
    <div class="main">
      <div class="pop"><img :src="uurl1" alt="图片1" /></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";

const uurl1 = ref("/src/assets/img/通用广告弹窗/默认弹窗.png");
// 上传组件组件注册事件监听

emitter.on("updateImage1", (url) => {
  uurl1.value = url;
});
</script>

<style scoped>
.page {
  background-image: url(@/assets/img/通用广告弹窗/广场页pad.png);
  background-size: cover;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.pop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.pop img {
  width: 26.171875rem;
}
</style>
