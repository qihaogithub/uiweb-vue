<template>
  <div class="list">
    <div class="zyname">
      <span>{{ ResourcesName }}</span>
      <a :href="ResourcesLink" target="_blank">
        <iconpark-icon name="help"></iconpark-icon>
      </a>
    </div>
    <button class="button_line" id="uploadButton" @click="uploadButton">
      <iconpark-icon name="upload"></iconpark-icon>
      <span>上传</span>
    </button>
    <input
      type="file"
      id="fileInputMiniBanner"
      accept="image/*"
      @change="handleFileChange"
      style="display: none"
      ref="fileInput"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useUploadStore } from "../../stores/Resources.js";

export default {
  props: {
    ResourcesName: {
      type: String,
      default: "资源名称",
    },
    ResourcesLink: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const uploadStore = useUploadStore();
    const fileInputRef = ref(null);

    // 定义 uploadButton 方法，用于触发文件输入框的点击事件
    function uploadButton() {
      fileInputRef.value.click();
    }

    // 定义 handleFileChange 方法，用于处理文件变更事件
    function handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadStore.setUploadedImage(e.target.result); // 将图片以 Data URL 形式存储到 Pinia store
        };
        reader.readAsDataURL(file);
        emitUploadEvent({ id: props.id, file: file }); // 触发自定义上传事件
      }
    }

    // 定义 emitUploadEvent 方法，用于触发自定义上传事件
    const emitUploadEvent = (payload) => {
      fileInputRef.value.dispatchEvent(
        new CustomEvent("upload", { detail: payload })
      );
    };

    // 返回 setup 函数中定义的响应式引用和函数
    return {
      uploadButton,
      handleFileChange,
      fileInputRef,
    };
  },
};
</script>

<style scoped>
.zyname a {
  margin: 0.25rem;
  vertical-align: middle;
}
.button_line {
  display: flex;
  width: 5.8333rem;
  height: 2.6667rem;
  padding: 0rem 0.6667rem;
  justify-content: center;
  align-items: center;
  gap: 0.1667rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.0833rem solid #e0dfdf;
  background: #fff;
  cursor: pointer; /* 当鼠标悬停在按钮上时，指针变成手指形状 */
}
</style>
