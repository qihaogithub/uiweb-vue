<template>
  <div class="page">
    <div class="flex-col">
      <div class="top">
        <img
          src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/top.png"
        />
      </div>
      <div class="card">
        <Card />
        <Card2 />
      </div>
    </div>
    <img class="tabbar" :src="tabbarImg" />
  </div>
</template>

<script setup>
import tabbarImg from "@/assets/img/学习页/年课续费/card/tabbar.png";
import Card from "./Card/Card.vue";
import Card2 from "./Card/Card2.vue";
</script>

<style scoped>
.page {
  position: relative;
  border-radius: 24px;
  height: 812px;
  overflow-y: auto;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 375px;
}
.top {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* background-color: #ff9595; */
}
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  width: 375px;
  height: 710px;
}
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 375px;
  height: 60px;
}
</style>
