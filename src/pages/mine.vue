<template>
  <div class="page">
    <!-- 画布 -->
    <div class="canvas">
      <div class="phone">
        <phone :color1="value1" :color2="value2" />
      </div>

      <div class="pad">
        <pad :color1="value1" :color2="value2" />
      </div>
    </div>
    <!-- 资源清单 -->
    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <div class="list">
            <div class="zyname">
              <span>通知条-左</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="1" :minSize="{ width: 1248, height: 384 }" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>通知条-右 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="1" :minSize="{ width: 1248, height: 384 }" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>通知条-背景色 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <a-color-picker v-model="value1" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>大banner背景图</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="2" :minSize="{ width: 1248, height: 344 }" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>活动卡片-背景 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <a-color-picker v-model="value2" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>大banner背景图</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="2" :minSize="{ width: 1248, height: 344 }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("#165DFF");
const value2 = ref("#31E242");
import pad from "@/components/mine/mine-pad.vue";
import phone from "@/components/mine/mine-phone.vue";
import upload from "@/components/general/upload/upload-simple.vue";
import { Help } from "@icon-park/vue-next";
</script>

<style scoped>
@import "@/assets/styles/phone.css";
@import "@/assets/styles/pad.css";
@import "@/assets/styles/page.css";
@import "@/assets/styles/resource.css";
</style>
