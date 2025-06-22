<template>
  <div class="page">
    <div class="column">
      <div class="top">
        <img src="@/assets/img/通用/状态栏/状态栏-pad.png" />
        <img src="@/assets/img/学习页/首页活动卡片/pad/切换按钮.png" />
      </div>
      <div class="two-columns">
        <div class="left-column">
          <img src="@/assets/img/学习页/首页活动卡片/pad/日历.png" />
        </div>
        <div class="right-column">
          <img
            class="date"
            src="@/assets/img/学习页/首页活动卡片/pad/日期.png"
          />
          <div class="card">
            <Card />
            <Card2 />
          </div>
        </div>
      </div>
      <img class="tabbar" :src="tabbarImg" />
    </div>
  </div>
</template>

<script setup>
import tabbarImg from "@/assets/img/通用/标签栏/底部标签栏-学习-pad.png";
import Card from "./Card/Card.vue";
import Card2 from "./Card/Card2.vue";
</script>

<style scoped>
.page {
  position: relative;
  border-radius: 24px;
  height: 744px;
  width: 1133px;
  overflow-y: auto;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 1133px;
  padding: 0 40px;
}
.two-columns {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.left-column {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.left-column img {
  width: 335px;
}
.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  gap: 20px;
}
.date {
  width: 216px;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1133px;
  height: 60px;
}
</style>
