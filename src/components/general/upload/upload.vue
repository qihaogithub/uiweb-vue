<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload
      action="/"
      :fileList="file ? [file] : []"
      :show-file-list="false"
      @before-upload="checkImageSize"
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
              <div style="margin-top: 10px; font-weight: 600">Upload</div>
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
import { Modal } from "@arco-design/web-vue";

const file = ref();
const id = ref(0); // 假设这个id是通过父组件传递的属性
const props = defineProps({
  id: Number,
  // 父组件传递了图片尺寸要求
  minSize: Object,
  maxSize: Object,
});

// 检查图片尺寸
const checkImageSize = (rawFile) => {
  const { minSize, maxSize } = props;

  // 创建一个新的 Promise 来处理异步校验
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
      img.onload = () => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        if (width !== minSize.width || height !== minSize.height) {
          Modal.confirm({
            title: "图片尺寸校验失败",
            content: `图片尺寸有误，应该是宽度为 ${minSize.width}px，高度为${minSize.height}px`,
            okText: "继续上传",
            cancelText: "取消",
            onOk: () => resolve(true),
            onCancel: () => reject("cancel"),
          });
          return; // 不直接reject，因为用户可能会选择“继续上传”
        }

        resolve(true); // 尺寸校验通过，允许上传
      };
    };

    reader.onerror = (error) => {
      Modal.error({
        title: "图片读取失败",
        content: "无法读取图片文件，请检查文件是否有效",
      });
      reject(error);
    };

    reader.readAsDataURL(rawFile);
  });
};

const onChange = (_, currentFile) => {
  file.value = currentFile;
  // 根据id来触发不同的事件
  const event = `updateImage${props.id}`;
  console.log(event);
  emitter.emit(event, file.value.url);
};

const onProgress = (currentFile) => {
  file.value = currentFile;
};
</script>
