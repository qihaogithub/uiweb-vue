<template>
  <img
    class="top"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/pad/%E7%8A%B6%E6%80%81%E6%A0%8F.png"
  />
  <div class="container">
    <div class="two-columns">
      <div class="left-column">
        <img
          src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/pad/%E5%B7%A6%E4%BE%A7%E9%A1%B6%E9%83%A8.png"
        />
        <div>
          <KuokeCard />
        </div>
        <img
          src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/pad/%E5%9B%9E%E5%88%B0%E4%BB%8A%E5%A4%A9.png"
        />
      </div>
      <div class="right-column">
        <img
          src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/pad/%E5%8F%B3%E4%BE%A7.png"
        />
      </div>
    </div>
  </div>
  <img
    class="tabBar"
    src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F-pad.png"
  />
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard-phone.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  transform: scale(0.346);
  padding: 0 80px;
  transform-origin: left top;
}
.top {
  width: 100%;
  margin-bottom: 1rem;
}

.tabBar {
  width: 100%;
  z-index: 999;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.left-column {
  flex: 1;
  padding-right: 10px;
}

.right-column {
  flex: 1;
  padding-left: 10px;
}
</style>
