<template>
  <div class="container">
    <img
      class="top"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/%E9%A1%B6%E9%83%A8%E5%9B%BE%E7%89%87.png"
    />
    <div class="content">
      <div>
        <KuokeCard />
      </div>
    </div>
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/%E5%B1%95%E5%BC%80%26%E6%94%B6%E8%B5%B7.png"
    />
    <img
      class="tabBar"
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F.png"
    />
  </div>
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard-phone.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 133.87%;
  width: 133.87%;
  transform: scale(0.747);
  transform-origin: left top;
}

.top {
  width: 375px;
}

.content {
  /*flex: 1; */ /* 表示该元素可以占据可用空间的所有剩余部分。 */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.tabBar {
  position: fixed; /*表示该元素相对于浏览器窗口进行定位，而不是相对于其父元素或其他元素。 */
  bottom: 0;
  width: 375px;
}
</style>
