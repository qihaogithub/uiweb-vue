<template>
  <div class="task-card">
    <div class="neirong">
      <img alt="配图" :src="bgimage" />
      <div class="text">
        <span class="title">趣味英语训练营</span>
        <span class="subtitle">沉浸体验 激发兴趣</span>
      </div>
    </div>

    <button class="participate-button">立即体验</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import emitter from "@/utils/emitter";

const bgimage = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/%E7%B4%A0%E6%9D%90%E5%9B%BE.png"
);

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  bgimage.value = url;
});
</script>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  height: 66px;
  padding: 0px 8px;
  align-items: center;
  border-radius: 1.5rem;
  background: #fff3eb;
}
.task-card img {
  width: 60px;
  height: 60px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  height: 100%;
}
.neirong {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
}
.title {
  color: #780a23;
  font-size: 12px;
  line-height: 1.2;
  height: auto;
}

.subtitle {
  color: #cc2d52;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
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
</style>
