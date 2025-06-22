<template>
  <div class="scale-container">
    <div class="container">
      <phone />
    </div>
  </div>
</template>

<script setup>
import phone from "./phone-card.vue";
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
</style>
