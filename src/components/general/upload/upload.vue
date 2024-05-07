<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload
      action="/"
      :fileList="file ? [file] : []"
      :show-file-list="false"
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

const file = ref();
const id = ref(0); // 假设这个id是通过父组件传递的属性
const props = defineProps({
  id: Number,
});

const onChange = (_, currentFile) => {
  file.value = {
    ...currentFile,
    // url: URL.createObjectURL(currentFile.file),
  };
  // 根据id来触发不同的事件
  const event = `updateImage${props.id}`;
  console.log(event);
  emitter.emit(event, file.value.url);
  // emitter.emit("myurl", file.value);
};
const onProgress = (currentFile) => {
  file.value = currentFile;
};
</script>
