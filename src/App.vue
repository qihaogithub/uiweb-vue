<template>
  <!-- 导航区 -->
  <div class="navigate"></div>
  <!-- 展示区 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>
  <ceshi></ceshi>
</template>

<script setup>
import { RouterView } from "vue-router";
import ceshi from "@/components/test/ceshi.vue";
</script>

<style scoped>
.main-content {
  height: 100%;
}
</style>
