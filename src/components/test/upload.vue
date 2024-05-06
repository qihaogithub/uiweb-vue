<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import mitt from "@/utils/emitter"; // 确保这是全局的 mitt 实例

const file = ref(null);

const handleFileChange = (event) => {
  file.value = event.target.files[0];
};

const handleUpload = () => {
  if (file.value) {
    // 触发上传事件，传递文件对象
    mitt.emit("upload-image", file.value);
  }
};
</script>
