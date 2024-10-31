<template>
  <div class="task-card">
    <span class="subtitle">这里是辅助文案</span>
    <div class="white-wrapper">
      <img class="task-image" alt="配图" :src="bgimage" />

      <div class="title">
        <p>这里是活动标题</p>
        <button class="participate-button">立即参与</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";

const bgimage = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E9%85%8D%E5%9B%BE-%E6%89%8B%E6%9C%BA.png"
);

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  bgimage.value = url;
});
</script>

<style scoped>
.task-card {
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  background: #fff3eb;
  padding: 10px;
}

.white-wrapper {
  background-color: white;
  border-radius: 8px; /* 圆角 */
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
}

.task-image {
  width: 100%;
  height: auto;
}

.title {
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  box-sizing: border-box;
  padding: 0.5rem;
}

.title p {
  font-size: 0.8rem;
  color: #6b2d03;
}

.participate-button {
  background-color: #fcda00;
  color: #6b430b;
  text-align: center;
  font-size: 0.8rem;
  border: none;
  padding: 5px 10px;
  border-radius: 1.5625rem;
}

.subtitle {
  /* display: block; */
  margin: 0.3rem 0 0.5rem 0.375rem;
  color: #e35b00;
}
</style>
