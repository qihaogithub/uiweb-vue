<template>
  <div class="pad-screen">
    <div class="element">
      <div class="pop-up">
        <img class="image" :src="img" />
        <div class="bottom">
          <div class="title" v-if="showText">
            <div class="text1">{{ title1 }}</div>
            <div class="text2">{{ title2 }}</div>
          </div>
          <div class="Button">
            <div class="MainButton">
              <div class="MainButtonText">{{ ButtonText1 }}</div>
            </div>
            <div class="SecondButtonText">{{ ButtonText2 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import emitter from "@/utils/emitter";
import resourceImg from "@/assets/img/底部广告弹窗/配图.png";
const img = ref(resourceImg);
const showText = ref(false);
const title1 = ref("孩子已完成第1节课程");
const title2 = ref("快来成长计划看看孩子的进步吧～");
const ButtonText1 = ref("去看看");
const ButtonText2 = ref("下次再说");

// 在组件挂载后注册事件监听器
onMounted(() => {
  emitter.on("updateImage1", (url) => {
    img.value = url;
  });
  
  emitter.on("updateTitle1", (newTitle) => {
    title1.value = newTitle;
  });
  
  emitter.on("updateTitle2", (newTitle) => {
    title2.value = newTitle;
  });
  
  emitter.on("updateButtonText1", (newTitle) => {
    ButtonText1.value = newTitle;
  });
  
  emitter.on("updateButtonText2", (newTitle) => {
    ButtonText2.value = newTitle;
  });
  
  emitter.on("updateShowText", (value) => {
    showText.value = value;
  });
});
</script>

<style scoped>
.pad-screen {
  background-image: url("https://uiweb.oss-cn-chengdu.aliyuncs.com/img/通用广告弹窗/广场页pad.png");
  background-size: cover;
  width: 100%;
  height: 100%;
}
.element {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.element .pop-up {
  display: flex;
  flex-direction: column;
  width: 375px;
}

.element .image {
  width: 100%;
  display: block;
}

.element .bottom {
  display: flex;
  padding: 8px 0px 20px 0px;
  border-radius: 0px 0px 32px 32px;
  margin-top: -1px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  background-color: #ffffff;
}

.element .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;
  flex: 0 0 auto;
}

.element .text1 {
  position: relative;
  align-self: stretch;
  color: var(-----6, #404040);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;

  /* T20M-大标题 */
  font-family: "PingFang SC";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
}


.element .text2 {
  color: var(-----5, #666);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}




.element .Button {
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 16px;
  position: relative;
  flex: 0 0 auto;
}

.element .MainButton {
  display: flex;
  width: 280px;
  height: 44px;
  padding: 8.5px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 30px;
  background: #fcda00;
}

.element .MainButtonText {
  color: #544300;
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;

  /* T18M-标题 */
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}

.element .SecondButtonText {
  color: #666;
  text-align: center;
  font-family: "PingFang SC";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
</style>
