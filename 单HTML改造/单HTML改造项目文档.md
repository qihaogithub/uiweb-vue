# 单 HTML 文件项目改造方案

## 项目概述

本项目旨在将原有的 Vue 组件化项目改造为单 HTML 文件结构，每个页面都是独立的 HTML 文件，便于 AI 编程时的增删改操作。项目基于 DaisyUI 和 Tailwind CSS，所有资源通过 CDN 引入，无本地文件依赖。

## 技术架构

### 前端技术栈

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

### 自动缩放功能

每个单 HTML 页面都实现了智能自动缩放功能，确保设备模拟器在不同屏幕尺寸下都能正确显示：

#### 缩放机制

1. **容器尺寸计算**

   - 使用 `getBoundingClientRect()` 获取精确的容器尺寸
   - 自动减去工具栏高度和边距，确保内容不被遮挡
   - 考虑侧边栏状态（展开/收起）对可用空间的影响

2. **设备尺寸常量**

   - 手机模拟器：375px × 812px（含边框：399px × 836px）
   - 平板模拟器：1024px × 812px（含边框：1056px × 844px）
   - 紧凑模式：720px（手机模式专用）

3. **缩放算法**

   ```javascript
   // 计算容器和内容的宽高比
   const scaleX = containerW / contentW;
   const scaleY = containerH / contentH;

   // 取较小值确保内容完全可见
   let scale = Math.min(scaleX, scaleY);

   // 限制缩放范围（0.2 - 1.0）
   scale = Math.min(Math.max(scale, 0.2), 1.0);
   ```

#### 视图模式

1. **对比模式** (`compare`)

   - 同时显示手机和平板模拟器
   - 内容宽度：手机 + 间隙 + 平板
   - 内容高度：取两者最大值

2. **手机模式** (`phone`)

   - 仅显示手机模拟器，使用紧凑高度
   - 节省屏幕空间，便于专注移动端设计

3. **平板模式** (`pad`)
   - 仅显示平板模拟器
   - 适用于平板端专门设计

#### 触发时机

- 页面加载完成后延迟 100ms 执行初始缩放
- 窗口大小变化时自动重新计算
- 侧边栏展开/收起时重新计算
- 视图模式切换时重新计算

#### 缩放显示

- 右下角实时显示当前缩放百分比
- 控制台输出调试信息（容器尺寸、内容尺寸、缩放比例）
- 支持手动刷新缩放（通过视图切换按钮）

#### 注意事项

- CSS 选择器中的特殊字符（如 `/`）需要转义或使用属性选择器
- 延迟执行确保 DOM 完全渲染后再计算尺寸
- 避免频繁计算造成性能问题，使用防抖机制

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

## 页面结构规范

### 统一布局模板

所有单 HTML 页面都采用以下标准布局模板，确保一致的用户体验和开发效率：

```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面标题 - 可视化编辑器</title>

    <!-- 引入Tailwind CSS和DaisyUI -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.min.css"
      rel="stylesheet"
      type="text/css"
    />

    <!-- 引入图标库 -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <style>
      /* 全局样式 */
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          sans-serif;
        overflow: hidden;
      }

      /* 设备外壳模拟 */
      .device-mockup {
        position: relative;
        background: #fff;
        border: 12px solid #1f2937;
        border-radius: 40px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        overflow: hidden;
        flex-shrink: 0; /* 防止在Flex容器中被压缩 */
      }

      .device-mockup.phone {
        width: 375px;
        height: 812px;
      }

      /* 手机紧凑模式：高度减小以避开顶部切换按钮 */
      .device-mockup.phone.phone-compact {
        height: 720px; /* 减小高度 */
      }

      .device-mockup.pad {
        width: 1024px;
        height: 812px; /* 与手机高度一致 */
        border-width: 16px;
        border-radius: 24px;
      }

      /* 屏幕容器 */
      .screen-container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        background-color: #fff;
      }

      /* 页面特定样式 - 根据不同页面自定义 */
      .page-specific-styles {
        /* 在此处添加页面特定的CSS样式 */
      }

      /* UI Helper Classes */
      .preview-wrapper {
        background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
        background-size: 20px 20px;
        overflow: hidden; /* 禁止滚动，完全依赖缩放 */
      }

      /* Stage Transition */
      #presentation-stage {
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        transform-origin: center center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
      }

      /* Sidebar Transition */
      #config-sidebar {
        transition: width 0.3s ease, transform 0.3s ease;
      }

      .toggle-btn {
        position: absolute;
        left: -24px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 48px;
        background: white;
        border: 1px solid #e5e7eb;
        border-right: none;
        border-radius: 8px 0 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.05);
        z-index: 50;
      }

      .sidebar-collapsed {
        width: 0 !important;
        border: none;
      }

      .sidebar-collapsed .sidebar-content {
        opacity: 0;
        pointer-events: none;
      }
    </style>
  </head>
  <body class="bg-base-200 h-screen flex w-full">
    <!-- 1. 左侧预览区域 (Flex-1) -->
    <main
      class="flex-1 h-full flex flex-col bg-slate-100 relative overflow-hidden order-1"
    >
      <!-- 顶部工具栏 - 固定结构，所有页面相同 -->
      <div
        class="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur p-1.5 rounded-full shadow-lg border border-white/50 flex gap-1"
      >
        <button
          class="btn btn-sm btn-ghost rounded-full px-5 data-[active=true]:bg-gray-900 data-[active=true]:text-white transition-all"
          id="btn-view-compare"
          onclick="switchView('compare')"
          data-active="true"
        >
          <i class="fa-solid fa-table-columns"></i> 对比
        </button>
        <button
          class="btn btn-sm btn-ghost rounded-full px-5 data-[active=true]:bg-gray-900 data-[active=true]:text-white transition-all"
          id="btn-view-phone"
          onclick="switchView('phone')"
          data-active="false"
        >
          <i class="fa-solid fa-mobile-screen"></i> 手机
        </button>
        <button
          class="btn btn-sm btn-ghost rounded-full px-5 data-[active=true]:bg-gray-900 data-[active=true]:text-white transition-all"
          id="btn-view-pad"
          onclick="switchView('pad')"
          data-active="false"
        >
          <i class="fa-solid fa-tablet-screen-button"></i> 平板
        </button>
      </div>

      <!-- 预览画布容器 - 固定结构，所有页面相同 -->
      <div
        class="w-full h-full flex items-center justify-center preview-wrapper relative"
        id="preview-container"
      >
        <!-- 舞台：包含所有设备，通过 JS 控制显隐和缩放 -->
        <div id="presentation-stage">
          <!-- 手机模型 - 外壳固定，内容动态 -->
          <div id="phone-mockup-wrapper" class="device-mockup phone">
            <div class="screen-container phone-bg">
              <!-- 页面特定内容 - 根据不同页面自定义 -->
              <div class="page-content-phone">
                <!-- 在此处添加手机端页面内容 -->
              </div>
            </div>
          </div>

          <!-- 平板模型 - 外壳固定，内容动态 -->
          <div id="pad-mockup-wrapper" class="device-mockup pad">
            <div class="screen-container pad-bg">
              <!-- 页面特定内容 - 根据不同页面自定义 -->
              <div class="page-content-pad">
                <!-- 在此处添加平板端页面内容 -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 缩放提示 - 固定结构，所有页面相同 -->
      <div
        class="absolute bottom-4 right-4 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded backdrop-blur"
      >
        Zoom: <span id="scale-val">100%</span>
      </div>
    </main>

    <!-- 2. 右侧配置面板 (Order-2) -->
    <aside
      id="config-sidebar"
      class="w-[380px] bg-base-100 h-full flex flex-col border-l border-base-300 shadow-xl z-20 relative order-2"
    >
      <!-- 收起/展开按钮 - 固定结构，所有页面相同 -->
      <div
        class="toggle-btn text-gray-500 hover:text-primary"
        onclick="toggleSidebar()"
      >
        <i class="fa-solid fa-chevron-right" id="toggle-icon"></i>
      </div>

      <!-- 侧边栏内容容器 - 固定结构，内容动态 -->
      <div
        class="sidebar-content flex flex-col h-full w-[380px] transition-opacity duration-200"
      >
        <!-- 面板标题 - 根据页面自定义标题文字 -->
        <div class="p-5 border-b border-base-200 bg-white shrink-0">
          <div class="flex items-center gap-2">
            <h1 class="text-lg font-bold text-gray-800">页面配置标题</h1>
          </div>
        </div>

        <!-- 配置选项区域 - 根据不同页面自定义配置项 -->
        <div class="flex-1 overflow-y-auto p-6 space-y-8">
          <!-- 在此处添加页面特定的配置选项 -->
        </div>
      </div>
    </aside>

    <script>
      // --- 1. 侧边栏收起/展开逻辑 - 固定代码，所有页面相同 ---
      let isSidebarOpen = true;
      function toggleSidebar() {
        const sidebar = document.getElementById("config-sidebar");
        const icon = document.getElementById("toggle-icon");

        isSidebarOpen = !isSidebarOpen;

        if (!isSidebarOpen) {
          sidebar.classList.add("sidebar-collapsed");
          icon.classList.remove("fa-chevron-right");
          icon.classList.add("fa-chevron-left");
        } else {
          sidebar.classList.remove("sidebar-collapsed");
          icon.classList.remove("fa-chevron-left");
          icon.classList.add("fa-chevron-right");
        }

        // 侧边栏动画结束后重新计算缩放
        setTimeout(autoFit, 350);
      }

      // --- 2. 视图切换逻辑 - 固定代码，所有页面相同 ---
      let currentMode = "compare"; // 默认模式

      function switchView(type) {
        currentMode = type;

        // 更新按钮状态
        document.getElementById("btn-view-compare").dataset.active =
          type === "compare";
        document.getElementById("btn-view-phone").dataset.active =
          type === "phone";
        document.getElementById("btn-view-pad").dataset.active = type === "pad";

        const phoneWrapper = document.getElementById("phone-mockup-wrapper");
        const padWrapper = document.getElementById("pad-mockup-wrapper");

        // 根据模式显示/隐藏设备
        if (type === "compare") {
          phoneWrapper.style.display = "block";
          padWrapper.style.display = "block";
          phoneWrapper.classList.remove("phone-compact");
        } else if (type === "phone") {
          phoneWrapper.style.display = "block";
          padWrapper.style.display = "none";
          phoneWrapper.classList.add("phone-compact"); // 手机模式添加紧凑样式
        } else if (type === "pad") {
          phoneWrapper.style.display = "none";
          padWrapper.style.display = "block";
          phoneWrapper.classList.remove("phone-compact");
        }

        // 触发自动缩放
        autoFit();
      }

      // --- 3. 自动缩放逻辑 - 固定代码，所有页面相同 ---
      function autoFit() {
        const container = document.getElementById("preview-container");
        const stage = document.getElementById("presentation-stage");
        const toolbar = document.querySelector(
          '[class*="top-6"][class*="left-1/2"]'
        );

        // 重置缩放以获取真实尺寸
        stage.style.transform = "scale(1)";

        // 获取容器尺寸 (优化计算逻辑)
        const containerRect = container.getBoundingClientRect();
        const containerW = containerRect.width - 80; // 增加边距
        const toolbarHeight = toolbar ? toolbar.offsetHeight + 60 : 100; // 工具栏高度 + 间距
        const containerH = containerRect.height - 80 - toolbarHeight; // 增加边距

        // 计算内容尺寸
        let contentW = 0;
        let contentH = 0;

        // 硬件尺寸常量
        const PHONE_W = 399; // 375 + border 24
        const PHONE_H = 836; // 812 + border 24
        const PHONE_COMPACT_H = 744; // 720 + border 24 (紧凑模式)
        const PAD_W = 1056; // 1024 + border 32
        const PAD_H = 844; // 812 + border 32 (与手机高度一致)
        const GAP = 40;

        if (currentMode === "compare") {
          contentW = PHONE_W + GAP + PAD_W;
          contentH = Math.max(PHONE_H, PAD_H);
        } else if (currentMode === "phone") {
          contentW = PHONE_W;
          contentH = PHONE_COMPACT_H; // 手机模式使用紧凑高度
        } else {
          contentW = PAD_W;
          contentH = PAD_H;
        }

        // 计算缩放比例 (优化算法)
        const scaleX = containerW / contentW;
        const scaleY = containerH / contentH;
        let scale = Math.min(scaleX, scaleY);

        // 限制最大缩放为1，最小缩放为0.2 (提高最小缩放限制)
        scale = Math.min(Math.max(scale, 0.2), 1);

        // 应用缩放
        stage.style.transform = `scale(${scale})`;
        document.getElementById("scale-val").innerText =
          Math.round(scale * 100) + "%";
      }

      // 监听窗口大小变化和侧边栏动画
      window.addEventListener("resize", () => {
        setTimeout(autoFit, 100);
      });

      // --- 4. 页面特定功能 - 根据不同页面自定义 ---

      // 在此处添加页面特定的JavaScript功能

      // --- 5. 初始化 - 固定代码，所有页面相同 ---
      document.addEventListener("DOMContentLoaded", function () {
        // 初始化页面特定功能
        // initPageSpecificFunctions();

        // 初始执行一次缩放 (延迟执行确保DOM完全渲染)
        setTimeout(() => {
          autoFit();
        }, 100);
      });
    </script>
  </body>
</html>
```

### 模板使用说明

#### 固定部分（无需修改）

以下结构在所有单 HTML 页面中完全相同，直接复制使用：

1. **HTML 基础结构**

   - DOCTYPE 声明、语言设置、字符编码
   - CDN 资源引入（Tailwind CSS、DaisyUI、Font Awesome）

2. **全局样式**

   - body 样式、设备外壳样式、屏幕容器样式
   - UI 辅助类（preview-wrapper、stage 过渡等）

3. **布局容器**

   - 左侧预览区域结构
   - 顶部工具栏（设备切换按钮）
   - 预览画布容器和舞台
   - 右侧配置面板框架

4. **核心 JavaScript 功能**
   - 侧边栏收起/展开逻辑
   - 视图切换逻辑
   - 自动缩放逻辑
   - 窗口大小监听
   - 初始化代码

#### 动态部分（需要自定义）

以下内容需要根据具体页面进行定制：

1. **页面标题**

   ```html
   <title>页面标题 - 可视化编辑器</title>
   ```

2. **页面特定样式**

   ```css
   /* 在此处添加页面特定的CSS样式 */
   .page-specific-styles {
     /* 页面特定的样式定义 */
   }
   ```

3. **手机端页面内容**

   ```html
   <div class="page-content-phone">
     <!-- 在此处添加手机端页面内容 -->
   </div>
   ```

4. **平板端页面内容**

   ```html
   <div class="page-content-pad">
     <!-- 在此处添加平板端页面内容 -->
   </div>
   ```

5. **配置面板标题**

   ```html
   <h1 class="text-lg font-bold text-gray-800">页面配置标题</h1>
   ```

6. **配置选项**

   ```html
   <div class="flex-1 overflow-y-auto p-6 space-y-8">
     <!-- 在此处添加页面特定的配置选项 -->
   </div>
   ```

7. **页面特定 JavaScript 功能**

   ```javascript
   // --- 4. 页面特定功能 - 根据不同页面自定义 ---

   // 在此处添加页面特定的JavaScript功能

   // 在初始化中调用
   // initPageSpecificFunctions();
   ```

### 开发最佳实践

1. **保持模板完整性**：不要删除固定部分的核心代码
2. **合理命名**：使用语义化的类名和 ID 命名
3. **响应式设计**：确保手机和平板端都有良好的显示效果
4. **性能优化**：避免在缩放计算中使用复杂的 DOM 查询
5. **代码复用**：将通用功能提取为可复用的函数

### 常见页面类型示例

#### 弹窗页面

- 内容区域：半透明遮罩 + 居中弹窗
- 配置选项：弹窗文案、按钮设置、触发条件

#### 列表页面

- 内容区域：滚动列表 + 顶部导航
- 配置选项：列表项配置、排序设置、分页设置

#### 表单页面

- 内容区域：表单控件 + 提交按钮
- 配置选项：字段配置、验证规则、提交设置

## 注意事项

1. 所有 DaisyUI 组件必须使用原生类名
2. 页面间跳转使用 `<a href="...">` 标签
3. 避免使用 Vue 或 React 等框架特有语法
4. 保持代码简洁，便于 AI 理解和修改
5. 合理使用注释说明复杂逻辑
6. 动态内容区域必须保持相同的 ID 命名规范
7. 设备切换逻辑在所有页面中保持一致
