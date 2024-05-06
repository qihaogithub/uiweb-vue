<template>
  <div>
    <!-- 使用 v-if 来判断是否有 image 属性传入 -->
    <img v-if="image" :src="image" alt="Uploaded Image" />
    <!-- 如果没有 image 属性，则显示默认图片 -->
    <img
      v-else
      src="/src/assets/img/通用广告弹窗/默认弹窗.png"
      alt="Default Image"
    />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: null,
  },
});
</script>
