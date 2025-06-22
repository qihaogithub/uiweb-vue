<template>
  <div class="container">
    <img
      class="top"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/top.png"
    />
    <div class="content">
      <div style="width: 89.3333333333333%">
        <bigBanner />
      </div>
    </div>
    <img
      class="tabBar"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F.png"
    />
  </div>
</template>

<script setup>
import bigBanner from "@/components/study/TaskCard/Big task card/bigTaskCard-phone.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  overflow-x: hidden;
}

.top {
  width: 100%;
  z-index: 2;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.tabBar {
  width: 100%;
}
</style>
