<template>
  <div class="page">
    <div class="main">
      <div class="pop">
<<<<<<< HEAD
        <img :src="uploadedImage" alt="弹窗资源" />
=======
        <img :src="imageUrl" alt="图片1" />
>>>>>>> b882d269f2f3b409e649645cecaf694682114a1a
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { ref } from "vue";
import { useUploadStore } from "../../stores/Resources.js";

export default {
  setup() {
    const uploadStore = useUploadStore();
    const uploadedImage = ref("src/assets/img/通用广告弹窗/默认弹窗.png");

    if (uploadStore.image) {
      uploadedImage.value = uploadStore.image;
    }

    return {
      uploadedImage: uploadedImage.value,
    };
  },
=======
export default {
  props: ["imageUrl"], // 使用prop接收父组件传递的图片URL
>>>>>>> b882d269f2f3b409e649645cecaf694682114a1a
};
</script>

<style scoped>
.page {
  background-image: url(/src/assets/img/通用广告弹窗/广场页phone.png);
  background-size: cover;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.pop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.pop img {
  width: 20.9375rem;
}
</style>
