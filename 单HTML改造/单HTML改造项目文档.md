# 单 HTML 文件项目改造方案

## 项目概述

本项目旨在将原有的 Vue 组件化项目改造为单 HTML 文件结构，每个页面都是独立的 HTML 文件，便于 AI 编程时的增删改操作。项目基于 DaisyUI 和 Tailwind CSS，所有资源通过 CDN 引入，无本地文件依赖。

## 改造目标

1. 将每个 Vue 页面组件转换为独立的单 HTML 文件
2. 使用 DaisyUI 和 Tailwind CSS 进行样式设计
3. 仅使用 DaisyUI 的原生类名，统一添加 bordered 后缀
4. 所有资源通过 CDN 引入，无本地文件依赖
5. CSS 仅写在 style 标签内的全局统一样式（间距、字体）

## 技术架构

### 前端技术栈

- **CSS 框架**: Tailwind CSS + DaisyUI
- **组件库**: DaisyUI (纯 CSS 组件，无 JS 依赖)
- **资源引入**: CDN (无本地依赖)
- **开发方式**: 单 HTML 文件 (所有代码在一个文件内)

### 文件结构

```
单HTML改造/
├── square.html           # 广场页面
├── bottom-pop-up.html    # 底部弹窗页面
├── pop-up.html           # 通用弹窗页面
├── after-class.html      # 课后服务页面
├── bandu-ad.html         # 伴读广告页面
├── mine.html             # 我的页面
├── task-card.html        # 任务卡片页面
├── kuoke.html            # 扩科页面
├── niankexuefei.html     # 年课续费页面
├── common-styles.css     # 全局样式文件 (可选，也可以内联)
└── README.md            # 项目说明文档
```

## 开发规范

### DaisyUI 类名使用规范

- 所有输入组件使用 `input-bordered`
- 所有选择组件使用 `select-bordered`
- 所有复选框使用 `checkbox-bordered` (如果存在)
- 所有文件上传使用 `file-input-bordered`
- 所有文本域使用 `textarea-bordered`
- 所有按钮使用 `btn-bordered` (如需要)

### 样式规范

- 所有 CSS 写在 `<style>` 标签内
- 全局统一样式包括间距、字体、颜色等
- 使用 Tailwind CSS 和 DaisyUI 的类名系统
- 避免使用自定义 CSS 类名，优先使用 DaisyUI 提供的样式

### HTML 结构规范

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面标题</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      // 启用DaisyUI
      tailwind.config = {
        plugins: [require("daisyu")],
      };
    </script>
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      /* 全局统一样式 */
      .global-spacing {
        padding: 1rem;
      }
      .global-font {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          sans-serif;
      }
    </style>
  </head>
  <body class="global-font">
    <!-- 页面内容 -->
  </body>
</html>
```

## 功能实现

### 资源管理

- 图片上传：使用 `<input type="file">` 和 JavaScript 实现
- 图片预览：使用 FileReader API 实现
- 图片验证：通过 JavaScript 验证尺寸要求
- 事件处理：使用 JavaScript 原生事件系统

### 响应式设计

- 使用 Tailwind CSS 的响应式类名
- 支持手机和平板两种设备类型
- 使用 DaisyUI 的组件自动适配不同屏幕

## AI 编程友好性

### 便于 AI 操作的特点

1. 单文件结构：AI 可以直接处理整个页面的所有内容
2. 无依赖：无需考虑模块导入导出
3. 标准化：使用标准 HTML/CSS/JS，AI 更容易理解
4. 组件化：虽然在单文件内，但保持组件化的逻辑结构

### 常见操作模式

- 添加新元素：在 HTML 中直接添加标签
- 修改样式：调整 Tailwind 和 DaisyUI 类名
- 添加交互：使用 JavaScript 事件处理
- 调整布局：使用 Tailwind 的 Flexbox/Grid 类名

## 部署方式

- 直接上传 HTML 文件到静态服务器
- 支持 CDN 分发
- 无需构建步骤
- 即传即用

## 注意事项

1. 所有 DaisyUI 组件必须使用原生类名
2. 页面间跳转使用 `<a href="...">` 标签
3. 避免使用 Vue 或 React 等框架特有语法
4. 保持代码简洁，便于 AI 理解和修改
5. 合理使用注释说明复杂逻辑
