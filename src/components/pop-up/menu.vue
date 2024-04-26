<template>
  <div class="menu-container">
    <div>
      <input type="file" @change="handleFileChange" />
      <button @click="uploadImage">上传图片</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleFileChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      // 处理文件上传 logic
      console.log('File selected:', file);
    },
    uploadImage() {
      // 上传图片的 logic
      console.log('Upload image clicked');
    },
  },
};
</script>

<style scoped>
.menu-container {
  /* 添加您的 CSS 样式 */
}
</style>