<template>
  <a-upload
    action="/"
    :fileList="file ? [file] : []"
    :show-file-list="false"
    :auto-upload="false"
    @before-upload="beforeUpload"
    @change="onChange"
    @progress="onProgress"
  >
    <template #upload-button>
      <button class="button_line">
        <span>上传</span>
      </button>
    </template>
  </a-upload>
</template>

<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";
import { useCheckImageSize } from "@/hooks/useCheckImageSize"; // 导入自定义 hook

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
};

const onProgress = (currentFile) => {
  file.value = currentFile;
};
</script>
<style scoped>
.button_line {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 100%;
  padding: 4px 10px;
  background-color: #f0f0f0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
}
</style>
