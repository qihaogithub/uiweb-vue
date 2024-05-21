<template>
  <div class="page">
    <!-- 画布 -->
    <div class="canvas">
      <div class="phone">
        <phone />
      </div>

      <div class="pad">
        <pad />
      </div>
    </div>
    <!-- 资源清单 -->
    <div class="resource-list">
      <div class="menu">
        <div class="title"><span>资源列表</span></div>
        <div class="resources">
          <div class="list">
            <div class="zyname">
              <span>大banner前景图</span>
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
              <span>大banner背景图</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
                target="_blank"
                ><Help theme="outline" size="12" fill="#666"
              /></a>
            </div>
            <upload :id="2" :minSize="{ width: 1248, height: 344 }" />
          </div>

          <div class="list" style="flex-direction: column; gap: 12px">
            <div class="zyname">
              <span>小banner</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/gwva2dxOW4KX7gmQCQN1X2oz8bkz3BRL?utm_scene=team_space"
                target="_blank"
              >
                <Help theme="outline" size="12" fill="#666" />
              </a>
            </div>
            <uploadPictureCard :id="3" :minSize="{ width: 480, height: 270 }" />
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
</script>

<style scoped>
@import "../assets/styles/phone.css";
@import "@/assets/styles/pad.css";
@import "@/assets/styles/page.css";
@import "@/assets/styles/resource.css";
</style>
