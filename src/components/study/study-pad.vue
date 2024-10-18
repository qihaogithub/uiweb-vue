<template>
  <div class="container">
    <img class="top" src="../../assets/img/学习页/top-pad.png" />
    <div class="content">
      <div style="width: 89.3333333333333%">
        <bigTaskCard />
      </div>
    </div>
  </div>
  <img class="tabBar" src="../../assets/img/学习页/底部标签栏-pad.png" />
</template>

<script setup>
import bigTaskCard from "@/components/study/Big task card/bigTaskCard-pad.vue";
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
