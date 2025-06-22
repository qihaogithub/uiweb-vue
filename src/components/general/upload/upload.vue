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
        <div
          :class="`arco-upload-list-item${
            file && file.status === 'error'
              ? ' arco-upload-list-item-error'
              : ''
          }`"
        >
          <div
            class="arco-upload-list-picture custom-upload-avatar"
            v-if="file && file.url"
          >
            <img :src="file.url" />
            <div class="arco-upload-list-picture-mask">
              <IconEdit />
            </div>
            <a-progress
              v-if="file.status === 'uploading' && file.percent < 100"
              :percent="file.percent"
              type="circle"
              size="mini"
              :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
            />
          </div>
          <div class="arco-upload-picture-card" v-else>
            <div class="arco-upload-picture-card-text">
              <IconPlus />
              <div style="margin-top: 10px; font-weight: 600">点击上传</div>
            </div>
          </div>
        </div>
      </template>
    </a-upload>
  </a-space>
</template>

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
