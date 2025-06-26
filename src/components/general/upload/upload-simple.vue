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
      <div class="icon-upload">
        <icon-upload />
      </div>
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
