document.addEventListener("DOMContentLoaded", function () {
    // 确保DOM加载完成后再执行
    function updateBackgroundColor(inputClass, divClass) {
        const inputs = document.querySelectorAll(`.${inputClass}`);

        inputs.forEach(input => {
            input.addEventListener('input', function (event) {
                const color = event.target.value.trim();

                if (/^#[0-9A-F]{6}$/i.test(color) || /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/.test(color)) {
                    const targetDivs = document.querySelectorAll(`.${divClass}`);

                    targetDivs.forEach(div => {
                        div.style.backgroundColor = color;
                    });
                }
            });
        });
    }
    // 调用修改颜色函数
    updateBackgroundColor('tztcolorInput', 'small_ad');
    updateBackgroundColor('hdcolorInput', 'hdbanner1-1');


});