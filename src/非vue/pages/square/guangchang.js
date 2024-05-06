

// 获取所有的DOM元素集合
const neirongList = document.querySelectorAll('.neirong');
const logoContainers = document.querySelectorAll('.navigationBar');
const logos = document.querySelectorAll('.logo');
const scans = document.querySelectorAll('.scan');

// 遍历所有的.neirong元素，为它们添加滚动事件监听器
neirongList.forEach((neirong, index) => {
    neirong.addEventListener('scroll', function () {
        // 获取滚动的距离（scrollTop）
        const scrollTop = this.scrollTop;

        // 根据滚动的距离计算缩放比例
        let scale = Math.max(0.8, 1 - (scrollTop / 50)); // 调整公式以确保scale在scrollTop为40时等于0.8

        // 通过索引获取对应的logo和scan元素
        const logo = logos[index];
        const scan = scans[index];
        const logoContainer = logoContainers[index];

        // 设置当前logo和scan的缩放比例
        logo.style.transform = `scale(${scale})`;
        scan.style.transform = `scale(${scale})`;

        // 同步调整当前logo容器的高度，以适应logo的缩放
        // 注意：这里假设logo的高度和容器的高度是等比例的
        logoContainer.style.height = `${1.375 * scale}rem`;
    });
});