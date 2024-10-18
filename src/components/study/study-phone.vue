<template>
  <div class="container">
    <img class="top" src="../../assets/img/学习页/top.png" />
    <div class="content">
      <div style="width: 89.3333333333333%">
        <bigBanner />
      </div>
    </div>
    <img class="tabBar" src="../../assets/img/学习页/底部标签栏.png" />
  </div>
</template>

<script setup>
import bigBanner from "@/components/study/Big task card/bigTaskCard-phone.vue";
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
