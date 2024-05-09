<template>
  <div class="page">
    <div class="main">
      <div class="pop">
        <img :src="pngurl" alt="图片1" />
        <div :id="'guide' + timeId" class="game-guide"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import emitter from "@/utils/emitter";
import SVGA from "svgaplayerweb";

const svgaurl = ref("/src/assets/svga/rk_gc_tc_02.svga");
const timeId = ref(Math.floor(new Date().getTime() * Math.random())); // 使该图表保持唯一id
const guideFn = () => {
  // 获取id的dom元素
  var player = new SVGA.Player(`#guide${timeId.value}`);
  var parser = new SVGA.Parser();

  parser.load(svgaurl.value, (videoItem) => {
    // 你的svga文件路径
    player.setVideoItem(videoItem);
    player.startAnimation(); // 开始动画
  });
};
onMounted(() => {
  guideFn();
});

const pngurl = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/默认弹窗.png"
);

// 上传组件组件注册事件监听
emitter.on("updateImage1", (url) => {
  pngurl.value = url;
});
emitter.on("updateImage2", (url) => {
  svgaurl.value = url;
});

// 监听pngurl和svgaurl的变化
watch(svgaurl, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    // 当svgaurl变化时，重新加载SVGA动画
    guideFn();
  }
});
</script>

<style scoped>
.page {
  background-image: url("https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/广场页pad.png");
  background-size: cover;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.pop {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.pop img {
  width: 26.171875rem;
}
.pop .game-guide {
  width: 26.171875rem;
}
</style>
