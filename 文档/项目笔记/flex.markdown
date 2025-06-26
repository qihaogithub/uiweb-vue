Flex 布局（弹性布局）是 CSS3 中一种用于布局的强大工具。它允许容器内的子元素在不同屏幕尺寸和设备上灵活地排列。以下是一些常用的 Flex 布局相关命令：

1. **容器属性**：

   - `display: flex;`：将元素设置为弹性容器。
   - `flex-direction`：定义主轴的方向（行或列）。
     - `row`（默认）：主轴为水平方向。
     - `row-reverse`：主轴为水平方向，反向排列。
     - `column`：主轴为垂直方向。
     - `column-reverse`：主轴为垂直方向，反向排列。
   - `flex-wrap`：定义子元素是否换行。
     - `nowrap`（默认）：不换行。
     - `wrap`：换行。
     - `wrap-reverse`：反向换行。
   - `justify-content`：定义主轴上的对齐方式。
     - `flex-start`：左对齐。
     - `flex-end`：右对齐。
     - `center`：居中对齐。
     - `space-between`：两端对齐，子元素之间均匀分布。
     - `space-around`：每个子元素两侧留有相等的空间。
   - `align-items`：定义交叉轴上的对齐方式。
     - `flex-start`：顶部对齐。
     - `flex-end`：底部对齐。
     - `center`：居中对齐。
     - `baseline`：基线对齐。
     - `stretch`（默认）：拉伸以填满容器。

2. **子元素属性**：
   - `flex-grow`：定义子元素的放大比例。
   - `flex-shrink`：定义子元素的缩小比例。
   - `flex-basis`：定义子元素的初始大小。
   - `flex`：是`flex-grow`、`flex-shrink`和`flex-basis`的简写。
   - `align-self`：允许单个子元素在交叉轴上有不同的对齐方式。

通过这些属性，开发者可以创建响应式和灵活的布局，适应不同的屏幕和设备。
