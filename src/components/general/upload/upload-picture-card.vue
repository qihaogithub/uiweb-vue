<template>
  <a-upload
    list-type="picture-card"
    action="/"
    :auto-upload="false"
    :show-retry-button="false"
    image-preview
    multiple
    @before-upload="beforeUpload"
    @change="onChange"
    @before-remove="handleBeforeRemove"
  />
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
import { useCheckImageSize } from "@/hooks/useCheckImageSize"; // 导入自定义 hook

// const file = ref();
const fileList = ref([]);

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

const onChange = (fileList) => {
  fileList.value = fileList;
  const urls = fileList.value.map((file) => file.url);
  const event = `updateImage${props.id}`;
  emitter.emit(event, urls);
};

const handleBeforeRemove = (file) => {
  // 返回一个 Promise，根据需要实现删除前的逻辑
  return new Promise((resolve, reject) => {
    // 确认删除后，从 fileList 中移除该文件，并更新 URL 数组
    const index = fileList.value.findIndex((item) => item.uid === file.uid);

    fileList.value.splice(index, 1);
    const urls = fileList.value.map((file) => file.url);
    emitter.emit("updateImages", urls);
    resolve(true);
  });
};
</script>
