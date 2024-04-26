<template>
  <div class="menu">
    <div class="title"><span>资源列表</span></div>
    <div class="resources">
      <upload @upload="handleUpload" />
      <upload @upload="handleUpload" />
    </div>
  </div>
</template>

<script>
import upload from "../general/upload.vue";

export default {
  components: {
    upload,
  },
  data() {
    return {
      resources: [
        {
          name: "png/gif资源",
          link: "https://alidocs.dingtalk.com/i/nodes/o14dA3GK8g5LAOBvS0xZGmMrV9ekBD76?utm_scene=team_space",
        },
        {
          name: "svga资源",
          link: "https://alidocs.dingtalk.com/i/nodes/o14dA3GK8g5LAOBvS0xZGmMrV9ekBD76?utm_scene=team_space",
        },
      ],
      imageUrl: "src/assets/img/通用广告弹窗/默认弹窗.png", // 初始图片URL
    };
  },
  emits: ["update:image"], // 声明组件D会触发一个名为update:image的事件
  methods: {
    handleUpload(file) {
      const imageUrl = URL.createObjectURL(file);
      this.$emit("update:image", imageUrl); // 将图片URL传递给父组件
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  height: 3.75rem;
  border-bottom: 0.0625rem solid #f5f4f4;
}
.resources {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1.25rem;
}
</style>
