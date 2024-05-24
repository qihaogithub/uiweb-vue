

// 为大banner前景图按钮添加点击事件监听器
document.getElementById('button-notice').addEventListener('click', function () {
    document.getElementById('inputNoticeLeft').click();
});

// 为大banner背景图按钮添加点击事件监听器
document.getElementById('uploadBackgroundButton').addEventListener('click', function () {
    document.getElementById('inputNoticeRight').click();
});

// 为小banner按钮添加点击事件监听器
document.getElementById('uploadhdBanner').addEventListener('click', function () {
    document.getElementById('fileInputhdBanner').click();
});

// 调用图片尺寸检测函数
validateImageHeight(68, 'inputNoticeLeft', '.left-img');
validateImageHeight(68, 'inputNoticeRight', '.right_img');
validateImageDimensions(296, 128, 'fileInputhdBanner', '.hdkpimg');
