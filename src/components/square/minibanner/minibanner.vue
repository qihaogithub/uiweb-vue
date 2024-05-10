<template>
  <div class="miniBanner">
    <img
      class="miniBannerFirst"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D01.png"
      alt="Mini Banner"
    />
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D02.png"
    />
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%B0%8Fbanner/Property%201%3D03.png"
    />
  </div>
</template>
<style scoped>
.miniBanner {
  display: flex;
  margin-top: 1rem;
  padding: 0 1.25rem;
  height: 5.69563rem;
  gap: 0.5rem;
  overflow-x: auto; /* 允许横向滚动 */
  scroll-snap-type: x mandatory; /* 滚动时对齐子元素 */
}
/* 隐藏整个滚动条 */
.miniBanner::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.miniBanner img {
  width: auto;
}
.miniBannerFirst {
  width: 100%;
  height: 100%;
}
</style>
