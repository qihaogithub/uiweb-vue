<template>
  <a-upload
    action="/"
    @change="onChange"
    :show-file-list="false"
    :auto-upload="false"
    accept=".svga"
  >
    <template #upload-button>
      <button class="button_line">
        <span>上传SVGA</span>
      </button>
    </template>
  </a-upload>
</template>

<script setup>
import { ref } from "vue";
import { Message } from "@arco-design/web-vue";
import emitter from "@/utils/emitter";

const file = ref();

const props = defineProps({
  id: Number,
  // 父组件传递了图片尺寸要求
  minSize: Object,
  maxSize: Object,
});

/**
 * 定义emit事件
 */
const emit = defineEmits(["upload"]);

/**
 * 处理文件变化
 */
const onChange = (_, currentFile) => {
  const fileObj = currentFile.file;

  // 检查文件类型
  if (!fileObj.name.toLowerCase().endsWith(".svga")) {
    Message.error("请上传SVGA格式的文件");
    return;
  }

  file.value = fileObj;
  const fileURL = URL.createObjectURL(file.value);

  // 触发自定义上传事件
  emit("upload", file.value);

  // 兼容原有事件系统
  const event = props.id ? `updateImage${props.id}` : "updateImage2";
  emitter.emit(event, fileURL);
};
</script>

<style scoped>
.button_line {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 100%;
  padding: 4px 10px;
  background-color: #f0f0f0;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
}

.button_line:hover {
  background-color: #e6e6e6;
}
</style>
