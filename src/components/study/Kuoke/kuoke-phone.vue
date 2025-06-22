<template>
  <DeviceContainer device-type="phone">
    <img
      class="top"
      src="@\assets\img\学习页\扩科卡片\phone\顶部图片.png"
    />
    <div class="kuoke-card">
      <KuokeCard />
    </div>
    <img
      src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E6%89%A9%E7%A7%91%E5%8D%A1%E7%89%87/%E5%B1%95%E5%BC%80%26%E6%94%B6%E8%B5%B7.png"
    />
    <div class="tabBar">
      <img
        class="tabBar-img"
        src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/%E5%AD%A6%E4%B9%A0%E9%A1%B5/%E5%BA%95%E9%83%A8%E6%A0%87%E7%AD%BE%E6%A0%8F.png"
      />
    </div>
  </DeviceContainer>
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard.vue";
import DeviceContainer from "@/components/common/DeviceContainer.vue";
</script>

<style scoped>
.scale-container {
  transform: scale(var(--phone-scale));
  transform-origin: left top;
}

.container {
  display: flex;
  flex-direction: column;
  width: 375px;
}

.kuoke-card {
  padding: 0 20px;
  width: 100%;

}

.tabBar {
  width: 100%;
  max-width: 375px;
}

.tabBar-img {
  width: 100%;
}
</style>
