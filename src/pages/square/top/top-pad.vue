<template>
  <div class="top">
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E9%A1%B6%E9%83%A8/%E7%8A%B6%E6%80%81%E6%A0%8F_pad.png"
    />
    <div class="navigationBar">
      <img
        class="logo"
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E9%A1%B6%E9%83%A8/%E5%8F%AB%E5%8F%AB%20Logo%20-%20%E5%9F%BA%E7%A1%80.png"
        alt=""
      />
      <img
        class="scan"
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E9%A1%B6%E9%83%A8/%E6%89%AB%E4%B8%80%E6%89%AB.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
}
.navigationBar {
  display: flex;
  height: 2.75em;
  justify-content: space-between;
  align-items: center;
  padding: 0.4375em 1.25em;
}
.logo {
  width: 9.625em;
  height: 1.875em;
  transform-origin: left center;
  /* 设置缩放原点为左边中心 */
  transition: transform 0.3s ease;
  /* 平滑过渡效果 */
  /* 添加一个平滑的过渡效果 */
}
.scan {
  height: 1.875em;
}
</style>
