function validateImageHeight(minHeight, fileInputId, selector) {
    var fileInput = document.getElementById(fileInputId);
    fileInput.addEventListener('change', function (e) {
        if (e.target.files.length > 0) {
            var file = e.target.files[0];
            var reader = new FileReader();
            var image = new Image();

            reader.onload = function (e) {
                image.src = e.target.result;
                image.onload = function () {
                    // 检查图片尺寸是否严格等于要求的尺寸
                    if (image.height === minHeight) {
                        // 更新页面上的图片元素
                        var elements = document.querySelectorAll(selector);
                        elements.forEach(function (element) {
                            element.src = e.target.result;
                        });
                    } else {
                        // 图片尺寸不符合要求，显示警告
                        alert('图片尺寸有误，要求高度 ' + minHeight + ' 像素。当前图片高度为 ' + image.height + ' 像素。');
                        var elements = document.querySelectorAll(selector);
                        elements.forEach(function (element) {
                            element.src = e.target.result;
                        });
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    });
}