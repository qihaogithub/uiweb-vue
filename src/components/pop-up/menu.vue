<template>
    <div>
      <input type="file" @change="handleFileChange" />
      <button @click="uploadImage">上传图片</button>


   
  
    </div>
</template>
  
<script>
  import phone from './pop-up-phone.vue';
  import pad from './pop-up-pad.vue';
  
  export default {
    data() {
      return {
        imageFile: null,
        isValid: true
      };
    },
    methods: {
      handleFileChange(event) {
        this.imageFile = event.target.files[0];
      },
      validateImageSize(file) {
        // 这里添加你的尺寸校验逻辑
        // 返回布尔值表示校验是否通过
        return true; // 示例，实际需要根据需求实现
      },
      uploadImage() {
        if (!this.imageFile) {
          return;
        }
  
        if (!this.validateImageSize(this.imageFile)) {
          alert('图片尺寸不符合规定！');
          this.isValid = false;
          return;
        }
  
        // 这里添加上传图片的逻辑
        // 假设上传成功后，图片URL存储在this.imageFileUrl
        const imageUrl = URL.createObjectURL(this.imageFile);
        this.$emit('update:image', imageUrl);
      }
    }
  }
</script>