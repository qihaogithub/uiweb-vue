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
    <div class="menu">
      <div class="title"><span>资源列表</span></div>
      <div class="resources">
        <div class="list">
          <div class="zyname">
            <span>通知条-左</span>
            <a
              href="https://alidocs.dingtalk.com/i/nodes/NZQYprEoWoe9jQgXHROmK7YXJ1waOeDk?utm_scene=team_space"
              target="_blank"
              ><iconpark-icon name="help"></iconpark-icon
            ></a>
          </div>
          <button class="button_line" id="button-notice">
            <iconpark-icon name="upload"></iconpark-icon>
            <span>上传</span>
          </button>
          <input
            type="file"
            id="inputNoticeLeft"
            accept="image/*"
            style="display: none"
          />
        </div>

        <div class="list">
          <div class="zyname">
            <span>通知条-右</span>
            <a
              href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
              target="_blank"
              ><iconpark-icon name="help"></iconpark-icon
            ></a>
          </div>
          <button class="button_line" id="uploadBackgroundButton">
            <iconpark-icon name="upload"></iconpark-icon>
            <span>上传</span>
          </button>
          <input
            type="file"
            id="inputNoticeRight"
            accept="image/*"
            style="display: none"
          />
        </div>

        <div class="list">
          <div class="zyname">
            <span>通知条-背景色</span>
            <a
              href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
              target="_blank"
              ><iconpark-icon name="help"></iconpark-icon
            ></a>
          </div>
          <input
            type="text"
            class="colorInput tztcolorInput"
            placeholder="色值"
          />
        </div>

        <div class="list">
          <div class="zyname">
            <span>活动卡片</span>
            <a
              href="https://alidocs.dingtalk.com/i/nodes/gwva2dxOW4KX7gmQCQN1X2oz8bkz3BRL?utm_scene=team_space"
              target="_blank"
              ><iconpark-icon name="help"></iconpark-icon
            ></a>
          </div>
          <button class="button_line" id="uploadhdBanner">
            <iconpark-icon name="upload"></iconpark-icon>
            <span>上传</span>
          </button>
          <input
            type="file"
            id="fileInputhdBanner"
            accept="image/*"
            style="display: none"
          />
        </div>

        <div class="list">
          <div class="zyname">
            <span>活动卡片-背景</span>
            <a
              href="https://alidocs.dingtalk.com/i/nodes/mExel2BLV54K0MnQCxk2Pq2wWgk9rpMq?utm_scene=team_space"
              target="_blank"
              ><iconpark-icon name="help"></iconpark-icon
            ></a>
          </div>
          <input
            type="text"
            class="colorInput hdcolorInput"
            placeholder="色值"
          />
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
