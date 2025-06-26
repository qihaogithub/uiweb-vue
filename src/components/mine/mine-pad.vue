<template>
  <div class="neirong">
    <img class="top" src="@/assets/img/我的页/pad/顶部.png" />

    <huodong class="huodong" v-bind="$attrs" />

    <img
      class="contact"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/pad/联系电话.png"
    />
  </div>
  <img class="tabBar" src="@/assets/img/我的页/pad/标签栏.png" />
</template>
<script setup>
import huodong from "@/components/mine/huodong.vue";
</script>

<style scoped>
.top {
  width: 100%;
}

.neirong {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 100px;
  overflow-x: hidden;
  font-size: 15px;
}
.huodong {
  margin: 0 177px;
}
.contact {
  width: 560px;
  margin: 0 auto;
}
.tabBar {
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
</style>
