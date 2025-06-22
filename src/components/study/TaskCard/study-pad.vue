<template>
  <div class="container">
    <img
      class="top"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/top-pad.png"
    />
    <div class="content">
      <div style="width: 89.3333333333333%">
        <bigTaskCard />
      </div>
    </div>
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F-pad.png"
  />
</template>

<script setup>
import bigTaskCard from "@/components/study/TaskCard/Big task card/bigTaskCard-pad.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 93%;
  background-color: #ffffff;
  overflow-x: hidden;
}
.top {
  width: 100%;
  margin-bottom: 1rem;
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
