<template>
  <div class="page">
    <div class="main">
      <div class="closed">
        <svg
          width="2.625em"
          height="2.625em"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="42" height="42" fill="black" fill-opacity="0.01" />
          <circle
            cx="21"
            cy="21.0002"
            r="18.0955"
            stroke="white"
            stroke-width="1.26847"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.6199 17.5782C27.126 16.9651 27.0923 16.0559 26.5186 15.4822C25.9091 14.8727 24.9208 14.8727 24.3113 15.4822L21.0002 18.7933L17.6892 15.4822L17.5778 15.381C16.9647 14.8748 16.0555 14.9086 15.4819 15.4822C14.8723 16.0918 14.8723 17.08 15.4819 17.6896L18.7929 21.0006L15.482 24.3115L15.3808 24.4229C14.8746 25.036 14.9083 25.9452 15.482 26.5188C16.0916 27.1284 17.0798 27.1284 17.6893 26.5188L21.0002 23.2079L24.3111 26.5188L24.4225 26.6201C25.0356 27.1263 25.9448 27.0925 26.5185 26.5188C27.128 25.9093 27.128 24.9211 26.5185 24.3115L23.2076 21.0006L26.5186 17.6896L26.6199 17.5782Z"
            fill="white"
          />
        </svg>
      </div>

      <div class="pop">
        <!-- 使用v-show来切换显示/隐藏 -->
        <img v-show="showImage" :src="pngurl" alt="图片1" />
        <div v-show="showSVGA" :id="'guide' + timeId" class="game-guide"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import emitter from "@/utils/emitter";
import SVGA from "svgaplayerweb";

const svgaurl = ref("/src/assets/svga/rk_gc_tc_02.svga");
const timeId = ref(Math.floor(new Date().getTime() * Math.random())); // 使该图表保持唯一id

/**
 * 初始化SVGA动画播放器
 */
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

/**
 * 处理PNG图片更新
 * @param {string} url - 图片URL
 */
const handleImage1Update = (url) => {
  pngurl.value = url;
};

/**
 * 处理SVGA文件更新
 * @param {string} url - SVGA文件URL
 */
const handleImage2Update = (url) => {
  svgaurl.value = url;
};

onMounted(() => {
  guideFn();
  // 注册事件监听
  emitter.on("updateImage1", handleImage1Update);
  emitter.on("updateImage2", handleImage2Update);
});

// 组件卸载时清理事件监听
onUnmounted(() => {
  emitter.off("updateImage1", handleImage1Update);
  emitter.off("updateImage2", handleImage2Update);
});

const pngurl = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/默认弹窗.png"
);

//默认显示png，隐藏svga
const showImage = ref(true); // 默认显示图片
const showSVGA = ref(false); // 默认不显示SVGA

// 监听pngurl的变化
watch(pngurl, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    showImage.value = true; // 显示图片
    showSVGA.value = false; // 隐藏SVGA
  }
});

// 监听svgaurl的变化
watch(svgaurl, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    showSVGA.value = true; // 显示SVGA
    showImage.value = false; // 隐藏图片
    guideFn(); // 重新加载SVGA动画
  }
});
</script>

<style scoped>
.page {
  background-image: url(https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/广场页phone.png);
  background-size: cover;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.closed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 20.9375em;
  padding: 0.5em 0;
}
.pop {
  width: 20.9375em;
  max-height: 27.8125em;
  min-height: 20.9375;
}
.pop img {
  width: 100%;
  height: auto;
}
.pop .game-guide {
  width: 20.9375em;
  height: 27.8125em;
}
</style>
