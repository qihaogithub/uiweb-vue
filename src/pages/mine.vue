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
                href="https://alidocs.dingtalk.com/i/nodes/NZQYprEoWoe9jQgXHROmK7YXJ1waOeDk?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="1" :heightExact="68" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>通知条-右 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/NZQYprEoWoe9jQgXHROmK7YXJ1waOeDk?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="2" :heightExact="68" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>通知条-背景色 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/NZQYprEoWoe9jQgXHROmK7YXJ1waOeDk?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <a-color-picker
              v-model="value1"
              show-text
              disabled-alpha
              size="mini"
              showPreset
              :presetColors="presetColors"
            />
          </div>
          <div class="list">
            <div class="zyname">
              <span>活动卡片</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/Qnp9zOoBVBZ79RqrHw2xLQ4QV1DK0g6l?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="3" :widthExact="296" :heightExact="128" />
          </div>
          <div class="list">
            <div class="zyname">
              <span>活动卡片-背景 </span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/Qnp9zOoBVBZ79RqrHw2xLQ4QV1DK0g6l?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <a-color-picker
              v-model="value2"
              show-text
              disabled-alpha
              size="mini"
              showPreset
              :presetColors="presetColors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import pad from "@/components/mine/mine-pad.vue";
import phone from "@/components/mine/mine-phone.vue";
import upload from "@/components/general/upload/upload-simple.vue";
import { Help } from "@icon-park/vue-next";

const value1 = ref("#fcf9de");
const value2 = ref("#ff9045");
const presetColors = ref([
  "#EBF9FF",
  "#EDFBFC",
  "#EEFCEB",
  "#F9F5FF",
  "#FBFCE8",
  "#FCF9DE",
  "#FEF7E5",
  "#FFF0F3",
  "#FFF2F0",
  "#FFF3EB",
]);
</script>
