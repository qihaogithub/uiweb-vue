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
                href="https://alidocs.dingtalk.com/i/nodes/QG53mjyd80RMX42QtXj1pmkGV6zbX04v"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="1" :widthExact="180" :heightExact="180" />
          </div>

          <div class="list">
            <div class="zyname">
              <span>科目</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/QG53mjyd80RMX42QtXj1pmkGV6zbX04v"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <a-select 
              :style="{width:'110px'}" 
              size="mini"
              placeholder="选择" 
              @change="handleSubjectChange"
              :trigger-props="{ autoFitPopupMinWidth: true }"
            >
              <a-option value="reading">阅读</a-option>
              <a-option value="puzzle">益智</a-option>
              <a-option value="art">美育</a-option>
              <a-option value="writing">小作家</a-option>
              <a-option value="english">英语</a-option>
            </a-select>
          </div>
          <div class="list-input">
            <a-input 
              :model-value="mainTitle"
              @update:model-value="updateTitle"
              placeholder="主标题" 
              allow-clear 
            />
            <a-input 
              :model-value="subTitle"
              @update:model-value="updateSubtitle"
              placeholder="副标题" 
              allow-clear 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import phone from "@/components/study/Kuoke/kuoke-phone.vue";
import pad from "@/components/study/Kuoke/kuoke-pad.vue";
import upload from "@/components/general/upload/upload-simple.vue";


import { FontSize, Help } from "@icon-park/vue-next";
import { ref } from 'vue';
import emitter from "@/utils/emitter";

const mainTitle = ref('趣味英语训练营');
const subTitle = ref('沉浸体验 激发兴趣');

const updateTitle = (value) => {
  mainTitle.value = value;
  emitter.emit('updateTitle', value);
}

const updateSubtitle = (value) => {
  subTitle.value = value;
  emitter.emit('updateSubtitle', value);
}

const handleSubjectChange = (value) => {
  emitter.emit('updateSubject', value);
};
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
  /* overflow-y: scroll; 显示垂直滚动条 */
  /* scrollbar-width: none; 隐藏滚动条样式 */
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
  /* overflow-x: hidden; */
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
  padding:  0 0 4px 0;
/* background-color: aquamarine; */
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.list-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
