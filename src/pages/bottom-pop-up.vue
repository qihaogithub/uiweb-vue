<template>
  <div class="page">
    <div class="canvas">
      <div class="phone-frame">
        <phone />
      </div>
      <div class="pad-frame">
        <pad />
      </div>
    </div>

    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <div class="list">
            <div class="zyname">
              <span>资源图</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/QOG9lyrgJP3gl9knin1Kleo9VzN67Mw4"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="1" :widthExact="750" :maxHeight="800" />
          </div>


          <div class="list-input">
            <div class="zyname">
              <span>按钮文案</span>
            </div>
            <a-input
              :model-value="ButtonText1"
              @update:model-value="updateButtonText1"
              placeholder="主按钮文案"
              allow-clear
            />
            <a-input
              :model-value="ButtonText2"
              @update:model-value="updateButtonText2"
              placeholder="次按钮文案"
              allow-clear
            />
          </div>
          <div class="text-toggle">
            <div class="zyname">
              <span>弹窗标题</span>
            </div>
            <a-switch 
              v-model:checked="showTextConfig" 
              @change="toggleTextConfig"
            />
          </div>
          <div class="list-input" v-if="showTextConfig">
            <a-input
              :model-value="title1"
              @update:model-value="updateTitle1"
              placeholder="主标题文案"
              allow-clear
            />
            <a-input
              :model-value="title2"
              @update:model-value="updateTitle2"
              placeholder="副标题文案"
              allow-clear
            />

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import phone from "@/components/bottom-pop-up/Box-phone.vue";
import pad from "@/components/bottom-pop-up/Box-pad.vue";
import upload from "@/components/general/upload/upload-simple.vue";

import { FontSize, Help } from "@icon-park/vue-next";
import { ref, watch, onMounted, nextTick } from "vue";
import emitter from "@/utils/emitter";

const showTextConfig = ref(false);
const title1 = ref( );
const title2 = ref( );
const ButtonText1 = ref( );
const ButtonText2 = ref( );

const updateTitle1 = (value) => {
  title1.value = value;
  emitter.emit("updateTitle1", value);
};

const updateTitle2 = (value) => {
  title2.value = value;
  emitter.emit("updateTitle2", value);
};

const updateButtonText1 = (value) => {
  ButtonText1.value = value;
  emitter.emit("updateButtonText1", value);
};

const updateButtonText2 = (value) => {
  ButtonText2.value = value;
  emitter.emit("updateButtonText2", value);
};

// 切换开关时的处理函数
const toggleTextConfig = (value) => {
  showTextConfig.value = value;
  nextTick(() => {
    emitter.emit("updateShowText", value);
  });
};

// 监听开关状态变化，发送事件通知手机和平板组件
watch(showTextConfig, (newValue) => {
  emitter.emit("updateShowText", newValue);
}, { immediate: true });

// 组件挂载时发送一次显示状态
onMounted(() => {
  // 初始化时发送一次显示状态
  emitter.emit("updateShowText", showTextConfig.value);
});
</script>

<style scoped>
.page {
  font-size: 12px;
  width: 100%;
  height: 100%;
}

.canvas {
  background-color: #edeff3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.pad-frame {
  background-color: #fff;
  width: var(--pad-width);
  height: var(--pad-height);
  flex-direction: column;
  /* 修改主轴方向*/
  align-items: center;
  overflow: hidden; /* 隐藏水平滚动条 */

  border-radius: 15px;
}

.pad-frame::-webkit-scrollbar {
  display: none;
}

.phone-frame {
  width: var(--phone-width);
  height: var(--phone-height);
  margin-top: 12px;
  margin: 22px 0;
  background-color: #fff;
  flex-direction: column;

  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0em 20px 37.5px 0em rgba(0, 0, 0, 0.08);
}

.phone::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}

.resource-list {
  display: flex;
  width: 192px;
  height: 100%;
  padding: 0 12px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  align-self: stretch;
  border-top: 0.75px solid #e0dfdf;
  border-left: 0.75px solid #e0dfdf;
  background-color: #fff;
  z-index: 2;
}

.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  height: 45px;
  border-bottom: 0.75px solid #f5f4f4;
}
.resources {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.zyname {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
}
.zyname a {
  padding: 0 0 4px 0;
  /* background-color: aquamarine; */
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.text-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
}
.list-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
