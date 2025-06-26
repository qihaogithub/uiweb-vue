<template>
  <div class="main">
    <div class="huodong">
      <div class="hdbiaoti">
        <p>邀请活动</p>
        <div class="hdbiaoti_r">
          <span class="text_2">邀请奖励记录</span>
          <iconpark-icon name="right"></iconpark-icon>
        </div>
      </div>
      <div class="hdbanner">
        <div class="hdbanner1-1" :style="{ backgroundColor: color2 }">
          <img class="hdkpimg" :src="img" />
        </div>
        <div class="hdbanner1-2">
          <img
            src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/资源/邀请活动02.png"
          />
        </div>
      </div>
    </div>
    <div class="huodong">
      <div class="hdbiaoti">
        <p>叫叫商场</p>
        <div class="hdbiaoti_r">
          <iconpark-icon name="right"></iconpark-icon>
        </div>
      </div>
      <div class="hdbanner">
        <div class="hdbanner2-1">
          <img
            src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/资源/商场1.png"
          />
        </div>
        <div class="hdbanner2-2">
          <img
            src="https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/资源/商场2.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import emitter from "@/utils/emitter";
import { ref } from "vue";
const img = ref(
  "https://uiweb.oss-cn-chengdu.aliyuncs.com/img/我的页/资源/邀请活动01.png"
);
// 上传组件组件注册事件监听
emitter.on("updateImage3", (url) => {
  img.value = url;
  console.log("收到了");
});

defineProps(["color2"]);
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 1.25em;
}
.huodong {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.hdbiaoti {
  display: flex;
  justify-content: space-between;
  padding: 0 0.25em;
  gap: 0.625em;
}
.hdbiaoti p {
  color: #666;
  font-size: 22.5px;
  font-style: normal;
  font-weight: 500;
}
.text_2 {
  font-size: 18px;
}
.hdbiaoti_r {
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1 0 0;
  color: #b2b2b2;
  text-align: right;
  font-size: 0.9375em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125em;
  /* 150% */
}
.hdbanner {
  display: flex;
  align-items: center;
  gap: 0.5em;
  align-self: stretch;
  height: 4em;
}
.hdbanner img {
  height: 100%;
}
.hdbanner1-1,
.hdbanner1-2,
.hdbanner2-1,
.hdbanner2-2 {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  flex: 1 0 0;
  border-radius: 1em;
}
.hdbanner1-1 {
  background: #ff9045;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}
.hdbanner1-2 {
  background: #ff715c;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}
.hdbanner2-1 {
  background: #fef7e5;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}
.hdbanner2-2 {
  background: #fef7e5;
  box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.02) inset;
}
</style>
