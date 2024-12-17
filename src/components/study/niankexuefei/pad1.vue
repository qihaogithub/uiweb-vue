<template>
  <div class="scale-container">
    <div class="popup">
      <div class="popup-content">
        <img src="@/assets/img/学习页/年课续费/resource_img.png" />
      </div>
      <img src="@/assets/img/学习页/年课续费/pad/按钮.png" />
    </div>
  </div>
</template>

<script setup>
import KuokeCard from "@/components/study/Kuoke/kuokeCard/kuokeCard.vue";
</script>

<style scoped>
/* 缩放效果 */
.scale-container {
  transform-origin: left top; /* 缩放原点 */
  transform: scale(var(--pad-scale));
  background-image: url("@/assets/img/学习页/年课续费/pad/弹窗底下的图.png");
  width: 1133px;
  height: 744px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  display: flex;
  width: 468px;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  background: #fff;
}
.popup-content {
  width: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 29.952px 29.952px 0px 0px;
  background: #ebf9ff;
}
.popup img {
  width: 100%;
}
</style>
