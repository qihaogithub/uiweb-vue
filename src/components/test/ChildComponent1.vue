<template>
  <div>
    <img :src="image" alt="Uploaded Image" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import mitt from "@/utils/emitter"; // 使用全局的 mitt 实例
// 显式引用 URL 对象以确保兼容性
const URL = window.URL || window.webkitURL;

const image = ref("/src/assets/img/通用广告弹窗/默认弹窗.png");

let unsubscribe;

onMounted(() => {
  // 监听上传图片事件
  unsubscribe = mitt.on("upload-image", (img) => {
    image.value = URL.createObjectURL(img);
  });
});

onUnmounted(() => {
  // 组件卸载时移除事件监听
  if (unsubscribe) {
    unsubscribe();
  }
});
</script>
