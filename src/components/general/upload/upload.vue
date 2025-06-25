<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
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
        <div class="icon-upload">
          <icon-upload />
        </div>
      </template>
    </a-upload>
  </a-space>
</template>

<style scoped>
.icon-upload {
  padding: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666666;
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: #f2f3f5;
  border: 1px solid #eaebed;
}

.icon-upload:hover {
  background-color: #e0e0e0;
}
</style>

<script setup>
import { IconEdit, IconPlus } from "@arco-design/web-vue/es/icon";
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
