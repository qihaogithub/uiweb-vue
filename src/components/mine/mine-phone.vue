<template>
  <img
    class="status_bar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E6%88%91%E7%9A%84%E9%A1%B5/phone/%E7%8A%B6%E6%80%81%E6%A0%8F.png"
  />
  <div class="neirong">
    <img
      class="top"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E6%88%91%E7%9A%84%E9%A1%B5/phone/%E9%A1%B6%E9%83%A8.png"
    />
    <notice />
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/phone/功能图标区域.png"
      style="margin: 0 1.25em"
    />
    <div class="huodong">
      <huodong />
    </div>

    <img
      class="contact"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/phone/联系电话.png"
    />
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/phone/标签栏.png"
  />
</template>
<script setup>
import notice from "@/components/mine/notice.vue";
import huodong from "@/components/mine/huodong.vue";
</script>
<style scoped>
.status_bar {
  position: absolute;
  top: 0;
  width: 100%;
}
.neirong::-webkit-scrollbar {
  display: none;
}

.neirong {
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  padding-bottom: 100px;
  overflow-x: hidden;
}
.huodong {
  margin: 0 1.25em;
}
.tabBar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
