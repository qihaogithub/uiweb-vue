<template>
  <div class="container" :class="deviceType">
    <div class="scale-container" :class="deviceType">
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
    validator: (value) => ["phone", "pad"].includes(value),
  },
});
</script>

<style scoped>
.scale-container {
  transform-origin: top left;
}

.scale-container.phone {
  transform: scale(var(--phone-scale));
}

.scale-container.pad {
  transform: scale(var(--pad-scale));
}

.container {
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
}
.container.phone {
  width: var(--phone-width);
  height: var(--phone-height);
}
.container.pad {
  width: var(--pad-width);
  height: var(--pad-height);
}

.scale-container.phone {
  width: 375px;
  height: 812px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  /* 隐藏滚动条但保留滚动功能 */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}
.scale-container.pad {
  width: 1133px;
  height: 749px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}
</style>
