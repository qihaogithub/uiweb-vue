<template>
  <div class="bigBanner">
    <img
      class="background-image"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E8%83%8C%E6%99%AF%E5%9B%BE.png"
      alt="Foreground Image"
    />
    <img
      class="foreground-image"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%B9%BF%E5%9C%BA%E9%A1%B5/%E5%A4%A7banner/banner_%E5%89%8D%E6%99%AF%E5%9B%BE.png"
      alt="Background Image"
    />
  </div>
</template>

<style scoped>
.bigBanner {
  position: relative;
  width: 100%; /* 宽度继承父级盒子的宽度 */
  height: calc(100% * 0.307692307692308);
  overflow: hidden;
}
.background-image {
  position: absolute;
  width: 100%;
  min-width: 23.4375rem;
  height: auto; /* 高度自适应 */
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 1.25rem;
}
.foreground-image {
  position: absolute;
  width: 100%;
  min-width: 23.4375rem;
  height: auto; /* 高度自适应 */
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
