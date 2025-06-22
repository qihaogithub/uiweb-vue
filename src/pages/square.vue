<template>
  <div class="page">
    <div class="canvas">
      <div class="phone">
        <phone />
      </div>
      <div class="pad">
        <pad />
      </div>
    </div>
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
            <upload :id="1" :widthExact="1248" :heightExact="384" />
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
            <upload :id="2" :widthExact="1248" :heightExact="344" />
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
import phone from "@/components/square/square-phone.vue";
import pad from "@/components/square/square-pad.vue";
import upload from "@/components/general/upload/upload-simple.vue";
import uploadPictureCard from "@/components/general/upload/upload-picture-card.vue";
import { Help } from "@icon-park/vue-next";
</script>

<style scoped>
.page {
  font-size: 12px;
  width: 100%;
  height: 100%;
}

.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5em;
  width: 100%;
  background-color: #edeff3;
}

.pad {
  width: 53.75em;
  height: 50.75em;
  margin: 1.875em 0;
  background-color: #fff;
  flex-direction: column;
  /* 修改主轴方向*/
  align-items: center;
  overflow-x: hidden;
  /* 隐藏水平滚动条并阻止水平滚动 */
  /* 允许内容在垂直方向上滚动 */
  /* overflow-y: auto; */
  border-radius: 1.25em;
  box-shadow: 0em 0.25em 3.125em 0em rgba(0, 0, 0, 0.08);
}

.pad::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}

.phone {
  width: 23.4375em;
  height: 50.75em;
  margin-top: 1em;
  margin: 1.875em 0;
  background-color: #fff;
  flex-direction: column;
  overflow-x: hidden;
  border-radius: 1.25em;
  box-shadow: 0em 0.25em 3.125em 0em rgba(0, 0, 0, 0.08);
}

.phone::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}

.resource-list {
  display: flex;
  width: 16em;
  height: 100%;
  padding: 0 1em;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  flex-shrink: 0;
  align-self: stretch;
  border-top: 0.0625em solid #e0dfdf;
  border-left: 0.0625em solid #e0dfdf;
  background-color: #fff;
  z-index: 2;
}

.title {
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  height: 3.75em;
  border-bottom: 0.0625em solid #f5f4f4;
}
.resources {
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  width: 100%;
}

.zyname {
  width: 100%;
}
.zyname a {
  margin: 0.25rem;
  vertical-align: middle;
  /* 居中对齐 */
}
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
