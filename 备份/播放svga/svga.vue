<template>
  <div :id="'guide' + timeId" class="game-guide"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import SVGA from "svgaplayerweb";

const timeId = ref(Math.floor(new Date().getTime() * Math.random())); // 使该图表保持唯一id
const guideFn = () => {
  // 获取id的dom元素
  var player = new SVGA.Player(`#guide${timeId.value}`);
  var parser = new SVGA.Parser();

  parser.load("/src/assets/svga/rk_gc_tc_02.svga", (videoItem) => {
    // 你的svga文件路径
    player.setVideoItem(videoItem);
    player.startAnimation(); // 开始动画
  });
};
onMounted(() => {
  guideFn();
});
</script>

<style scoped>
.game-guide {
  width: 26.171875rem;
}
</style>
