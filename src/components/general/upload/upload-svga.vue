<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload action="/" @change="onChange" :show-file-list="false" />
  </a-space>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
import { useCheckImageSize } from "@/hooks/useCheckImageSize"; // 导入自定义 hook

const file = ref();
const lastTriggerTime = ref(0); // 新增变量记录上一次触发时间

const props = defineProps({
  id: Number,
  // 父组件传递了图片尺寸要求
  minSize: Object,
  maxSize: Object,
});

// 检查图片尺寸
const beforeUpload = (rawFile) => {
  return useCheckImageSize(rawFile, props.minSize, props.maxSize); // 调用自定义 hook
};

const onChange = (_, currentFile) => {
  const currentTime = new Date().getTime(); // 获取当前时间
  if (currentTime - lastTriggerTime.value > 3000) {
    file.value = currentFile;
    const event = `updateImage${props.id}`;
    const fileURL = URL.createObjectURL(file.value.file);
    file.value.url = fileURL;

    emitter.emit(event, file.value.url);
    // 更新上一次触发时间为当前时间
    lastTriggerTime.value = currentTime;
  }
};
</script>
