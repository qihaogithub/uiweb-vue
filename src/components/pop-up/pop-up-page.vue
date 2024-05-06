<template>
  <div class="page">
    <div class="canvas">
      <div class="phone">
        <phone :imageUrl="imageUrl" />
      </div>
      <div class="pad">
        <pad :imageUrl="imageUrl" />
      </div>
    </div>
    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <upload
            :id="'upload1'"
            :ResourcesName="'资源1'"
            :ResourcesLink="'https://alidocs.dingtalk.com/i/desktop'"
            @upload="handleUpload"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import pad from "./pop-up-pad.vue";
import phone from "./pop-up-phone.vue";
import upload from "../general/upload.vue";

const imageUrl = ref("src/assets/img/通用广告弹窗/默认弹窗.png");
const uploadedImages = ref({
  upload1: null,
  upload2: null,
});

function updateImage(newImageUrl) {
  imageUrl.value = newImageUrl;
}

function handleUpload({ id, file }) {
  uploadedImages.value[id] = file;
  // 这里可以根据id来决定将图片传递给哪个子组件
}
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  display: flex;
}

.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  /* 弹性盒子沿主轴居中排列 */
  flex-wrap: wrap;
  /*弹性盒子挤压时可以换行 */
  gap: 2.5rem;
  width: 100%;
}

.pad {
  width: 53.75rem;
  height: 50.75rem;
  margin: 1.875rem 0;
  background-color: #fff;
  flex-direction: column;
  /* 修改主轴方向*/
  align-items: center;
  overflow-x: hidden;
  /* 隐藏水平滚动条并阻止水平滚动 */
  /* 允许内容在垂直方向上滚动 */
  /* overflow-y: auto; */
  border-radius: 1.25rem;
  box-shadow: 0rem 0.25rem 3.125rem 0rem rgba(0, 0, 0, 0.08);
}

.pad::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}

.phone {
  width: 23.4375rem;
  height: 50.75rem;
  margin-top: 1rem;
  margin: 1.875rem 0;
  background-color: #fff;

  flex-direction: column;
  /* 修改主轴方向*/
  overflow-x: hidden;
  /* 隐藏水平滚动条并阻止水平滚动 */
  /* 允许内容在垂直方向上滚动 */
  /* overflow-y: auto;  */
  border-radius: 1.25rem;
  box-shadow: 0rem 0.25rem 3.125rem 0rem rgba(0, 0, 0, 0.08);
}

.phone::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}

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
