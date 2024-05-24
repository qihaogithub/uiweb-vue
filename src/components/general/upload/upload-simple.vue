<template>
  <a-upload
    action="/"
    :fileList="file ? [file] : []"
    :show-file-list="false"
    :auto-upload="false"
    @before-upload="beforeUpload"
    @change="onChange"
  >
    <template #upload-button>
      <button class="button_line">
        <span>上传</span>
      </button>
    </template>
  </a-upload>
</template>

<script setup>
import emitter from "@/utils/emitter";
import { checkImageSize } from "@/hooks/checkImageSize.js"; // 导入自定义 hook

const file = ref(null); // 使用 ref 创建一个响应式引用
const props = defineProps({
  id: Number,
  widthExact: Number,
  heightExact: Number,
  minWidth: Number,
  maxWidth: Number,
  minHeight: Number,
  maxHeight: Number,
});

// 检查图片尺寸
const beforeUpload = (file) => {
  return checkImageSize(
    file,
    props.widthExact,
    props.heightExact,
    props.minWidth,
    props.maxWidth,
    props.minHeight,
    props.maxHeight
  ); // 调用自定义 hook
};

const onChange = (_, file) => {
  file.value = file; // 更新响应式引用
  // 根据id来触发不同的事件
  const event = `updateImage${props.id}`;
  emitter.emit(event, file.value.url);
  console.log("发送了");
};

// const onProgress = (currentFile) => {
//   file.value = currentFile;
// };
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
