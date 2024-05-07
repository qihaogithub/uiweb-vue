<script setup>
import upload from "@/components/test/ceshi.vue";
import emitter from "@/utils/emitter";
import { ref } from "vue";

// 创建三个独立的引用，分别对应三张图片
const uurl1 = ref("");
const uurl2 = ref("");
const uurl3 = ref("");

// 为每个上传组件注册一个事件监听
emitter.on("updateImage1", (url) => {
  uurl1.value = url;
});

emitter.on("updateImage2", (url) => {
  uurl2.value = url;
});

emitter.on("updateImage3", (url) => {
  uurl3.value = url;
});
</script>

<template>
  <upload :id="1" />
  <upload :id="2" />
  <upload :id="3" />
  <img :src="uurl1" alt="图片1" />
  <img :src="uurl2" alt="图片2" />
  <img :src="uurl3" alt="图片3" />
</template>
