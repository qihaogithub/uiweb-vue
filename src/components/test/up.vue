<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <!-- Upload 组件 -->
    <a-upload
      :action="uploadAction"
      :customRequest="customRequest"
      @change="onChange"
      @progress="onProgress"
      :fileList="fileList"
      :show-file-list="true"
    >
    </a-upload>
    <!-- 已上传的图片列表 -->
    <div v-if="fileList.length > 0">
      <h3>Uploaded Images</h3>
      <div v-for="file in fileList" :key="file.uid" class="image-container">
        <img :src="file.url" alt="Uploaded Image" class="uploaded-image" />
      </div>
    </div>
  </a-space>
</template>

<script setup>
import { IconPlus } from "@arco-design/web-vue/es/icon";
import { ref } from "vue";

const fileList = ref([]);
const uploadAction =
  "https://apiupload-gfatptrscp.cn-chengdu.fcapp.run/api/upload"; // 确保这是服务器端接收上传的端点

const customRequest = (option) => {
  const { onProgress, onError, onSuccess, file, name } = option;
  const formData = new FormData();
  // 确保 fileItem 是一个对象，并且它有一个 file 属性
  if (fileItem && fileItem.file) {
    formData.append(name || "file", fileItem.file);
  } else {
    // 如果 fileItem 或 fileItem.file 不存在，返回错误
    return onError(new Error("No file found to upload."));
  }

  formData.append(name || "file", file);
  // 使用 fetch API 进行上传
  fetch(uploadAction, {
    // 确保这里的 URL 是正确的
    method: "POST",
    body: formData,
    onUploadProgress: (event) => {
      let percent = 0;
      if (event.lengthComputable) {
        percent = (event.loaded / event.total) * 100;
      }
      onProgress(percent, event);
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
      // 更新 fileList 以包含新上传的文件
      const newFile = {
        uid: Date.now() + file.name, // 生成唯一标识符
        name: file.name,
        url: data.url, // 确保服务器返回的响应中包含 fileURL
      };
      fileList.value.push(newFile);
    })
    .catch((error) => {
      onError(error);
    });
  console.log("FormData:", Array.from(formData.entries()));
};

const onChange = (_, currentFile) => {
  console.log("变了");
};
</script>
