// 为大banner前景图按钮添加点击事件监听器
document.getElementById('uploadForegroundButton').addEventListener('click', function () {
    document.getElementById('fileInputForeground').click();
});

// 为大banner背景图按钮添加点击事件监听器
document.getElementById('uploadBackgroundButton').addEventListener('click', function () {
    document.getElementById('fileInputBackground').click();
});

// 为小banner按钮添加点击事件监听器
document.getElementById('uploadMiniBannerButton').addEventListener('click', function () {
    document.getElementById('fileInputMiniBanner').click();
});

// 调用图片尺寸检测函数
validateImageDimensions(1248, 384, 'fileInputForeground', '.foreground-image');
validateImageDimensions(1248, 344, 'fileInputBackground', '.background-image');
validateImageDimensions(480, 270, 'fileInputMiniBanner', '.miniBannerFirst');
