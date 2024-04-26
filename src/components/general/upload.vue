<template>
  <div class="list">
    <div class="zyname">
      <span>{{ ResourcesName }}</span>
      <a :href="ResourcesLink" target="_blank"
        ><iconpark-icon name="help"></iconpark-icon
      ></a>
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
export default {
  props: {
    ResourcesName: {
      type: String,
      default: "资源名称", // 可以为属性设置一个默认值
    },
    ResourcesLink: {
      type: String,
      default: "", // 可以为属性设置一个默认值
    },
  },
  methods: {
    uploadButton() {
      this.$refs.fileInput.click(); // 确保使用 this.$refs 引用文件输入框
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.$emit("upload", file); // 触发上传事件，并将文件传递给父组件
      }
    },
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
