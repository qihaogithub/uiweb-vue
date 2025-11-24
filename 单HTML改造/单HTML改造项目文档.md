# 单HTML文件项目改造方案

## 项目概述

本项目旨在将原有的Vue组件化项目改造为单HTML文件结构，每个页面都是独立的HTML文件，便于AI编程时的增删改操作。项目基于DaisyUI和Tailwind CSS，所有资源通过CDN引入，无本地文件依赖。

## 改造目标

1. 将每个Vue页面组件转换为独立的单HTML文件
2. 使用DaisyUI和Tailwind CSS进行样式设计
3. 仅使用DaisyUI的原生类名，统一添加bordered后缀
4. 所有资源通过CDN引入，无本地文件依赖
5. CSS仅写在style标签内的全局统一样式（间距、字体）

## 技术架构

### 前端技术栈
- **CSS框架**: Tailwind CSS + DaisyUI
- **组件库**: DaisyUI (纯CSS组件，无JS依赖)
- **资源引入**: CDN (无本地依赖)
- **开发方式**: 单HTML文件 (所有代码在一个文件内)

### 文件结构
```
单HTML改造/
├── square.html           # 广场页面
├── bottom-pop-up.html    # 底部弹窗页面
├── general-pop-up.html   # 通用弹窗页面
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

### DaisyUI类名使用规范
- 所有输入组件使用 `input-bordered`
- 所有选择组件使用 `select-bordered`
- 所有复选框使用 `checkbox-bordered` (如果存在)
- 所有文件上传使用 `file-input-bordered`
- 所有文本域使用 `textarea-bordered`
- 所有按钮使用 `btn-bordered` (如需要)

### 样式规范
- 所有CSS写在 `<style>` 标签内
- 全局统一样式包括间距、字体、颜色等
- 使用Tailwind CSS和DaisyUI的类名系统
- 避免使用自定义CSS类名，优先使用DaisyUI提供的样式

### HTML结构规范
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // 启用DaisyUI
        tailwind.config = {
            plugins: [require('daisyu')]
        }
    </script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css" rel="stylesheet" type="text/css" />
    <style>
        /* 全局统一样式 */
        .global-spacing { padding: 1rem; }
        .global-font { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    </style>
</head>
<body class="global-font">
    <!-- 页面内容 -->
</body>
</html>
```

## 功能实现

### 资源管理
- 图片上传：使用 `<input type="file">` 和JavaScript实现
- 图片预览：使用FileReader API实现
- 图片验证：通过JavaScript验证尺寸要求
- 事件处理：使用JavaScript原生事件系统

### 响应式设计
- 使用Tailwind CSS的响应式类名
- 支持手机和平板两种设备类型
- 使用DaisyUI的组件自动适配不同屏幕

## AI编程友好性

### 便于AI操作的特点
1. 单文件结构：AI可以直接处理整个页面的所有内容
2. 无依赖：无需考虑模块导入导出
3. 标准化：使用标准HTML/CSS/JS，AI更容易理解
4. 组件化：虽然在单文件内，但保持组件化的逻辑结构

### 常见操作模式
- 添加新元素：在HTML中直接添加标签
- 修改样式：调整Tailwind和DaisyUI类名
- 添加交互：使用JavaScript事件处理
- 调整布局：使用Tailwind的Flexbox/Grid类名

## 部署方式

- 直接上传HTML文件到静态服务器
- 支持CDN分发
- 无需构建步骤
- 即传即用

## 注意事项

1. 所有DaisyUI组件必须使用原生类名
2. 页面间跳转使用 `<a href="...">` 标签
3. 避免使用Vue或React等框架特有语法
4. 保持代码简洁，便于AI理解和修改
5. 合理使用注释说明复杂逻辑