# SaveCanvas 组件使用教程

## 简介

SaveCanvas 是一个用于将页面内容保存为图片的通用组件。它支持可滚动内容的完整捕获、绝对定位元素的正确处理、自定义留白等功能。

## 安装依赖

确保项目已安装必要的依赖：

```bash
npm install html2canvas
```

## 基础用法

```vue
<template>
  <div class="your-page">
    <!-- 要截图的内容容器 -->
    <div class="content-container">
      <!-- 你的页面内容 -->
    </div>

    <!-- 使用 SaveCanvas 组件 -->
    <SaveCanvas selector=".content-container" filename="效果图.png" />
  </div>
</template>

<script setup>
import SaveCanvas from "@/components/general/SaveCanvas.vue";
</script>
```

## 属性说明

| 属性名                 | 类型    | 默认值       | 必填 | 说明                 |
| ---------------------- | ------- | ------------ | ---- | -------------------- |
| selector               | String  | -            | 是   | 要截图的元素选择器   |
| filename               | String  | "效果图.png" | 否   | 保存的文件名         |
| padding                | Number  | 40           | 否   | 四周留白大小(px)     |
| scale                  | Number  | 2            | 否   | 图片缩放比例         |
| ignoreSelector         | String  | ""           | 否   | 需要忽略的元素选择器 |
| handleAbsoluteElements | Boolean | true         | 否   | 是否处理绝对定位元素 |

## 使用示例

### 1. 基础使用

最简单的使用方式，只需提供要截图的元素选择器：

```vue
<SaveCanvas selector=".content-container" />
```

### 2. 自定义文件名和留白

```vue
<SaveCanvas
  selector=".content-container"
  filename="我的截图.png"
  :padding="20"
/>
```

### 3. 忽略特定元素

如果页面中有些元素不想包含在截图中：

```vue
<SaveCanvas selector=".content-container" ignoreSelector=".ignore-this" />
```

### 4. 调整图片质量

通过调整 scale 可以控制输出图片的质量：

```vue
<SaveCanvas
  selector=".content-container"
  :scale="3"  <!-- 更高的清晰度 -->
/>
```

### 5. 处理可滚动内容

对于包含可滚动内容的容器，组件会自动处理并捕获完整内容：

```vue
<div class="scrollable-container">
  <div class="long-content">
    <!-- 长内容 -->
  </div>
</div>

<SaveCanvas selector=".scrollable-container" />
```

## 注意事项

1. **选择器指定**：

   - selector 必须是一个有效的 CSS 选择器
   - 确保选择器能唯一定位到目标元素

2. **图片资源**：

   - 所有图片资源需要能够正常加载
   - 跨域图片可能需要特殊处理

3. **绝对定位元素**：

   - 默认会处理绝对定位元素
   - 如果不需要处理，可设置 `:handleAbsoluteElements="false"`

4. **样式还原**：

   - 组件会在截图后自动还原所有修改的样式
   - 不会影响页面的正常显示

5. **性能考虑**：
   - 截图过程中会有 1 秒延迟，确保内容完全渲染
   - 对于内容特别多的页面，可能需要较长处理时间

## 常见问题

1. **图片不完整**：

   - 检查 selector 是否正确
   - 确保内容完全加载
   - 可能需要调整延迟时间

2. **绝对定位元素位置错误**：

   - 确认 handleAbsoluteElements 为 true
   - 检查元素的定位父容器

3. **清晰度不够**：

   - 增加 scale 值
   - 注意 scale 值过大可能影响性能

4. **某些元素不需要截图**：
   - 使用 ignoreSelector 排除不需要的元素

## 示例代码

完整的使用示例：

```vue
<template>
  <div class="page">
    <div class="content-container">
      <div class="scrollable-content">
        <!-- 你的页面内容 -->
      </div>
    </div>

    <div class="button-container">
      <SaveCanvas
        selector=".content-container"
        filename="页面截图.png"
        :padding="40"
        :scale="2"
        ignoreSelector=".ignore-this"
        :handleAbsoluteElements="true"
      />
    </div>
  </div>
</template>

<script setup>
import SaveCanvas from "@/components/general/SaveCanvas.vue";
</script>
```
