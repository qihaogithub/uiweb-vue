<template>
  <div class="scale-container">
    <div class="container">
      <pad />
    </div>
  </div>
</template>

<script setup>
import pad from "./pad-screen.vue";
</script>

<style scoped>
.scale-container {
  transform: scale(var(--pad-scale));
  transform-origin: left top;
}

.container {
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
}
</style>
