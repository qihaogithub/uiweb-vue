<template>
  <div class="page">
    <div class="canvas" style="font-size: 14px">
      <div class="phone">
        <phone />
      </div>
      <div class="pad">
        <popUp />
      </div>
    </div>

    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <upload
            :id="1"
            :minSize="{ width: 670, height: 670 }"
            :maxSize="{ width: 670, height: 890 }"
          />
          <uploadSvga
            :id="2"
            :minSize="{ width: 670, height: 670 }"
            :maxSize="{ width: 670, height: 890 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import phone from "@/components/square/square-phone.vue";
import upload from "@/components/general/upload/upload.vue";
import popUp from "@/components/pop-up/pop-up-pad.vue";
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  display: flex;
}

.canvas {
  width: 100%;
  height: 100%;
  /* transform: scale(0.8); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
  width: 100%;
  background-color: blue;
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
  overflow-x: hidden;
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
