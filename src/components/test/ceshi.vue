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
      <template #upload-button>
        <a-button>
          <IconPlus />
          Upload
        </a-button>
      </template>
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

<script>
import { IconPlus } from "@arco-design/web-vue/es/icon";
import { ref } from "vue";

export default {
  components: { IconPlus },
  setup() {
    const fileList = ref([]);
    const uploadAction = "https://apiupload-gfatptrscp.cn-hangzhou.fcapp.run"; // 确保这是服务器端接收上传的端点

    const customRequest = (option) => {
      const { onProgress, onError, onSuccess, file, name } = option;
      const formData = new FormData();
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
    };

    const onChange = (info) => {
      // 此处可以根据 info 做进一步处理
    };

    const onProgress = (file) => {
      // 可以在这里处理上传进度
    };

    return {
      fileList,
      uploadAction,
      customRequest,
      onChange,
      onProgress,
    };
  },
};
</script>

<style scoped>
.image-container {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.uploaded-image {
  max-width: 100px;
  max-height: 100px;
}
</style>
