<template>
  <a-upload
    list-type="picture-card"
    action="/"
    :default-file-list="fileList"
    :auto-upload="false"
    image-preview
    @before-upload="beforeUpload"
    @change="onChange"
    @progress="onProgress"
  />
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
import { useCheckImageSize } from "@/hooks/useCheckImageSize"; // 导入自定义 hook
// import { config } from "webpack";
const file = ref();
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
  file.value = currentFile;
  // 根据id来触发不同的事件
  const event = `updateImage${props.id}`;

  emitter.emit(event, file.value.url);
  console.log(file.value.url);
};

const onProgress = (currentFile) => {
  file.value = currentFile;
};
</script>
