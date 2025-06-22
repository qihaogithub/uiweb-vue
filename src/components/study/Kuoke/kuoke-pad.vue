<template>
  <DeviceContainer device-type="pad">
    <img class="top" src="@/assets/img/通用/状态栏/状态栏-pad.png" />
    <div class="column">
      <div class="two-columns">
        <div class="left-column">
          <img
            src="@/assets/img/学习页/扩科卡片/pad/左侧顶部.png"
          />
          <div class="kuoke-card">
            <KuokeCard />
          </div>
          <img src="@/assets/img/学习页/扩科卡片/pad/回到今天.png" />
        </div>
        <div class="right-column">
          <img
            src="@/assets/img/学习页/扩科卡片/pad/右侧.png"
          />
        </div>
      </div>
    </div>
    <img
      class="tabBar"
      src="@\assets\img\学习页\任务卡片\底部标签栏-pad.png"
    />
  </DeviceContainer>
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard.vue";
import DeviceContainer from "@/components/common/DeviceContainer.vue";
</script>

<style scoped>
/* 缩放效果 */
.scale-container {
  transform-origin: left top; /* 缩放原点 */
  transform: scale(var(--pad-scale));
}
img {
  width: 100%;
}

.top {
  width: 1103px;
  margin:0 15px;
}
.column {
  display: flex;
  flex-direction: column;
  width: 1133px;
  padding: 0 40px;

  
}

.tabBar {
  width: 100%;
  z-index: 999;
}

.two-columns {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  
}

.left-column {
  display: flex;
  flex-direction: column;
  width: 375px;
  /* background: #000; */

}
.kuoke-card {
  width: 100%;

}
.right-column {
  flex: 1;
}
.tabBar {
  width: 1133px;
  z-index: 999;
  position: static;
  bottom: 0;
}
</style>
