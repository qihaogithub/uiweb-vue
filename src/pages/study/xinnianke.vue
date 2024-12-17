<template>
  <div class="page">
    <div class="canvas-container">
      <div class="canvas">
        <div class="preview-row">
          <div class="phone-frame">
            <phone1 :color1="value1" />
          </div>
          <div class="pad-frame">
            <pad1 :color1="value1" />
          </div>
        </div>
        <div class="preview-row">
          <div class="phone-frame">
            <phone2 :color1="value1" />
          </div>
          <div class="pad-frame">
            <pad2 :color1="value1" />
          </div>
        </div>
      </div>
    </div>

    <div class="resource-list">
      <div class="menu">
        <div class="title">
          <span>资源列表</span>
        </div>
        <div class="resources">
          <div class="list">
            <div class="resource-title">
              <span>手机版资源</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/EpGBa2Lm8azLY0OAtLXZqAmoWgN7R35y"
                target="_blank"
                class="help-link"
              >
                <Help theme="outline" size="12" fill="#666" />
              </a>
            </div>
            <upload :id="1" :widthExact="1125" :maxHeight="1500" />
          </div>

          <div class="list">
            <div class="resource-title">
              <span>pad版资源</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/EpGBa2Lm8azLY0OAtLXZqAmoWgN7R35y"
                target="_blank"
                class="help-link"
              >
                <Help theme="outline" size="12" fill="#666" />
              </a>
            </div>
            <upload :id="2" :widthExact="1950" />
          </div>

          <div class="list">
            <div class="resource-title">
              <span>科目</span>
              <a
                href="https://alidocs.dingtalk.com/i/nodes/EpGBa2Lm8azLY0OAtLXZqAmoWgN7R35y"
                target="_blank"
                class="help-link"
              >
                <Help theme="outline" size="12" fill="#666" />
              </a>
            </div>
            <a-select
              class="subject-select"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 导入必要的组件和工具
import phone1 from "@/components/study/niankexuefei/Box-phone1.vue"; // 手机预览组件
import phone2 from "@/components/study/niankexuefei/Box-phone2.vue";
import pad1 from "@/components/study/niankexuefei/pad1.vue"; // 平板预览组件
import pad2 from "@/components/study/niankexuefei/pad2.vue"; // 平板预览组件
import upload from "@/components/general/upload/upload-simple.vue"; // 图片上传组件
import { Help } from "@icon-park/vue-next"; // 帮助图标组件
import { ref } from "vue";
import emitter from "@/utils/emitter"; // 事件总线，用于组件间通信

// 标题和副标题的响应式数据
const mainTitle = ref("趣味英语训练营");
const subTitle = ref("沉浸体验 激发兴趣");

// 更新标题并通过事件总线广播更新
const updateTitle = (value) => {
  mainTitle.value = value;
  emitter.emit("updateTitle", value);
};

// 更新副标题并通过事件总线广播更新
const updateSubtitle = (value) => {
  subTitle.value = value;
  emitter.emit("updateSubtitle", value);
};

// 处理科目变更并广播
const handleSubjectChange = (value) => {
  emitter.emit("updateSubject", value);
};

const value1 = ref("#fcf9de");
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

<style scoped>
/* 页面整体布局 */
.page {
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: flex;
}

/* 新增canvas容器，允许滚动 */
.canvas-container {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

/* 预览画布区域样式 */
.canvas {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #edeff3;
  min-height: 100%;
  padding: 5vw 0;
}

/* 预览行样式 */
.preview-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  flex-wrap: nowrap; /* 防止换行 */
  min-height: fit-content; /* 确保最小高度适应内容 */
}

/* 手机和平板预览框公共样式 */
.phone-frame,
.pad-frame {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  flex-direction: column;
  flex-shrink: 0; /* 防止压缩 */
}

/* 手机预览框特有样式 */
.phone-frame {
  width: var(--phone-width);
  height: var(--phone-height);
  margin: 0;
  box-shadow: 0 20px 37.5px rgba(0, 0, 0, 0.08);
}

/* 平板预览框特有样式 */
.pad-frame {
  width: var(--pad-width);
  height: var(--pad-height);
  align-items: center;
}

/* 右侧资源列表面板样式 */
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

/* 资源列表标题样式 */
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
  height: 45px;
  border-bottom: 0.75px solid #f5f4f4;
}

/* 资源配置区域样式 */
.resources {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

/* 资源项标题样式 */
.resource-title {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
}

/* 帮助链接样式 */
.help-link {
  padding: 0 0 4px 0;
}

/* 资源项列表样式 */
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* 输入框列表样式 */
.list-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

/* 科目选择器宽度 */
.subject-select {
  width: 110px;
}
</style>
