<template>
  <div class="scale-container" :class="deviceType">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup>
/**
 * 设备容器组件 - 用于包装手机和平板组件的通用容器
 * @param {string} deviceType - 设备类型：'phone' 或 'pad'
 */
defineProps({
  deviceType: {
    type: String,
    required: true,
    validator: (value) => ['phone', 'pad'].includes(value)
  }
})
</script>

<style scoped>
.scale-container {
  transform-origin: center center;
}

.scale-container.phone {
  transform: scale(var(--phone-scale));
}

.scale-container.pad {
  transform: scale(var(--pad-scale));
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.scale-container.phone {
  width: 375px;
  height: 812px;
  border-radius: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background-color: #ffffff;
}
.scale-container.pad {
  width: 1133px;
  height: 744px;
  border-radius: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background-color: #ffffff;
}
</style>