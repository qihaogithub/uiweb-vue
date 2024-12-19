<template>
  <div class="scale-container">
    <div class="container">
      <pad />
    </div>
  </div>
</template>

<script setup>
import pad from "./pad-card.vue";
</script>

<style scoped>
.scale-container {
  transform: scale(var(--pad-scale));
  transform-origin: left top;
}
/* .scale-container {
  transform-origin: left top; 
  transform: scale(var(--pad-scale));
  background-image: url("@/assets/img/学习页/年课续费/pad/弹窗底下的图.png");
  width: 1133px;
  height: 744px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.container {
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
}
</style>
