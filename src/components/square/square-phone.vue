<template>
  <div class="page">
    <div class="top">
      <img src="/src/assets/img/广场页/状态栏_pad.png" />
      <div class="navigationBar">
        <img
          class="logo"
          src="/src/assets/img/广场页/叫叫 Logo - 基础.png"
          alt=""
        />
        <img class="scan" src="/src/assets/img/广场页/扫一扫.png" alt="" />
      </div>
    </div>
    <div class="neirong">
      <div class="subject">
        <div class="km s1">
          <img src="src/assets/img/广场页/科目图标/阅读.png" />
          <span>阅读</span>
        </div>
        <div class="km s2">
          <img src="src/assets/img/广场页/科目图标/益智.png" />
          <span class="font_3 text_10 mt-3">益智</span>
        </div>
        <div class="km s3">
          <img src="src/assets/img/广场页/科目图标/美育.png" />
          <span class="font_3 text_11 mt-3">美育</span>
        </div>
        <div class="km s4">
          <img src="src/assets/img/广场页/科目图标/写作.png" />
          <span class="font_3 text_12 mt-3">写作</span>
        </div>
        <div class="km s5">
          <img src="src/assets/img/广场页/科目图标/英语.png" />
          <span class="font_3 text_13 mt-3">英语</span>
        </div>
      </div>
      <bigBanner />
      <div class="miniBanner">
        <img
          class="miniBannerFirst"
          src="src/assets/img/广场页/小banner/Property 1=01.png"
          alt="Mini Banner"
        />
        <img src="src/assets/img/广场页/小banner/Property 1=02.png" />
        <img src="src/assets/img/广场页/小banner/Property 1=03.png" />
      </div>
      <div class="other">
        <img src="src/assets/img/广场页/内容/内容.png" />
      </div>
    </div>

    <img class="tabBar" src="src/assets/img/广场页/底部标签栏_pad.png" />
  </div>
</template>

<script setup>
import bigBanner from "./big-banner.vue";
</script>

<style scoped>
.page {
  background-image: url("https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/广场页pad.png");
  background-size: cover;
}
</style>
