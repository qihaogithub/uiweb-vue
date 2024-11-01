外部容器 .phone 的尺寸保持不变（23.4375em x 50.75em）
内部内容区域 .kuoke-phone-container 以 375px 为基准宽度进行开发
通过 transform: scale() 将内容缩放到合适的大小
transform-origin: center center 确保缩放是从中心点进行的
注意：
具体的缩放比例(scale 值)需要根据您的 em 与 px 的实际换算比例来调整
您可能需要调整高度值(812px)以适应您的具体需求
如果发现内容显示不完整，可以适当调整外部容器的 overflow 属性
这样您就可以在开发时以 375px 为基准进行编码，同时保持外观与设计稿一致。
