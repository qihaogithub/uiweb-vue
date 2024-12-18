<template>
  <a-button type="primary" @click="saveCanvas" :loading="isLoading">
    {{ isLoading ? "正在生成图片..." : "保存效果图" }}
  </a-button>
</template>

<script setup>
import { ref } from "vue";
import html2canvas from "html2canvas";

const props = defineProps({
  // 要截图的元素选择器
  selector: {
    type: String,
    required: true,
  },
  // 保存的文件名
  filename: {
    type: String,
    default: "效果图.png",
  },
  // 四周留白大小(px)
  padding: {
    type: Number,
    default: 40,
  },
  // 图片缩放比例
  scale: {
    type: Number,
    default: 2,
  },
  // 忽略的元素选择器
  ignoreSelector: {
    type: String,
    default: "",
  },
  // 是否需要处理绝对定位元素
  handleAbsoluteElements: {
    type: Boolean,
    default: true,
  },
});

const isLoading = ref(false);

const saveCanvas = async () => {
  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const element = document.querySelector(props.selector);
    if (!element) return;

    // 保存原始滚动位置和样式
    const originalScroll = element.scrollTop;
    const originalStyle = element.getAttribute("style") || "";
    const originalHeight = element.style.height;
    const originalOverflow = element.style.overflow;

    // 临时修改容器样式以显示所有内容
    element.style.height = "auto";
    element.style.overflow = "visible";

    // 等待所有图片加载完成
    const images = Array.from(element.getElementsByTagName("img"));
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // 保存原始样式
    const originalStyles = new Map();
    const frames = element.querySelectorAll(".phone-frame, .pad-frame");
    frames.forEach((frame) => {
      originalStyles.set(frame, frame.getAttribute("style") || "");
      frame.style.transform = "none";
      frame.style.position = "relative";
      frame.style.overflow = "visible";
    });

    // 创建容器
    const container = document.createElement("div");
    container.style.padding = `${props.padding}px`;
    container.style.position = "relative";
    container.style.width = "fit-content";

    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      scale: props.scale,
      backgroundColor: null,
      alpha: true,
      height: element.scrollHeight, // 设置为实际内容高度
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.querySelector(props.selector);
        if (clonedElement) {
          // 确保克隆元素显示完整内容
          clonedElement.style.height = "auto";
          clonedElement.style.overflow = "visible";

          // 包装克隆元素
          const wrapper = container.cloneNode(true);
          wrapper.style.backgroundColor = "transparent";
          clonedElement.style.backgroundColor = "transparent";
          clonedElement.parentNode.insertBefore(wrapper, clonedElement);
          wrapper.appendChild(clonedElement);

          if (props.handleAbsoluteElements) {
            handleAbsolutePositioning(clonedElement);
          }
        }
      },
      scrollX: 0,
      scrollY: 0,
      ignoreElements: (element) => {
        return props.ignoreSelector && element.matches(props.ignoreSelector);
      },
      logging: true,
      imageTimeout: 0,
    });

    // 恢复原始样式
    frames.forEach((frame) => {
      const originalStyle = originalStyles.get(frame);
      if (originalStyle) {
        frame.setAttribute("style", originalStyle);
      }
    });

    // 恢复容器的原始状态
    element.style.height = originalHeight;
    element.style.overflow = originalOverflow;
    element.scrollTop = originalScroll;
    if (originalStyle) {
      element.setAttribute("style", originalStyle);
    }

    const link = document.createElement("a");
    link.download = props.filename;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  } catch (error) {
    console.error("保存图片失败:", error);
  } finally {
    isLoading.value = false;
  }
};

// 处理绝对定位元素
const handleAbsolutePositioning = (element) => {
  // 处理所有手机和平板框架
  const frames = element.querySelectorAll(".phone-frame, .pad-frame");
  frames.forEach((frame) => {
    frame.style.transform = "none";
    frame.style.position = "relative";
    frame.style.overflow = "visible";
  });

  // 处理特定元素
  const pages = element.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.position = "relative";
    page.style.height = "812px";

    // 处理顶部图片
    const topImg = page.querySelector(".pos");
    if (topImg) {
      topImg.style.position = "absolute";
      topImg.style.top = "0";
      topImg.style.left = "0";
      topImg.style.right = "-1px";
      topImg.style.zIndex = "1";
    }

    // 处理底部tabbar
    const tabbar = page.querySelector(".tabbar");
    if (tabbar) {
      tabbar.style.position = "absolute";
      tabbar.style.bottom = "0";
      tabbar.style.left = "0";
      tabbar.style.width = "375px";
      tabbar.style.zIndex = "1";
    }
  });
};
</script>
