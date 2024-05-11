<template>
  <div class="bigBanner">
    <img
      class="background-image"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E8%83%8C%E6%99%AF%E5%9B%BE.png"
      alt="Foreground Image"
    />
    <img
      class="foreground-image"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E5%89%8D%E6%99%AF%E5%9B%BE.png"
      alt="Background Image"
    />
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";
// 定义接收的props参数
const props = defineProps({
  model: {
    type: String,
    default: "pad", // 默认参数值
  },
});
const x1 = "100%"; // 假设A对应的宽度是100%
const x2 = "53.6858974358974%"; // 假设B对应的宽度是54%

const imageWidth = computed(() => (props.model === "pad" ? x1 : x2));
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
