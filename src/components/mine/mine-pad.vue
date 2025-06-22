<template>
  <img
    class="status_bar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/pad/状态栏.png"
  />

  <div class="neirong">
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E6%88%91%E7%9A%84%E9%A1%B5/pad/%E9%A1%B6%E9%83%A8.png"
    />
    <notice v-bind="$attrs" />

    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/pad/功能图标区域.png"
    />
    <huodong v-bind="$attrs" />

    <img
      class="contact"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/pad/联系电话.png"
    />
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/pad/标签栏.png"
  />
</template>
<script setup>
import notice from "@/components/mine/notice.vue";
import huodong from "@/components/mine/huodong.vue";
</script>

<style scoped>
.status_bar {
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
}

.neirong::-webkit-scrollbar {
  display: none;
}

.neirong {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 100px;
  overflow-x: hidden;
  font-size: 15px;
  margin: 0 2.5em;
}

.tabBar {
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
</style>
