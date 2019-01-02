setHtmlFontSize();
function setHtmlFontSize() {

    var designWidth = 750;
    var designFontSize = 200;
    var windowWidth = document.documentElement.offsetWidth;

    // 计算当前醒目的根元素大小
    var nowFontSize = windowWidth / (designWidth / designFontSize);
    // 设置到当前html元素的font-size
    document.documentElement.style.fontSize = nowFontSize + 'px';
}

//添加一个事件.
window.addEventListener('resize',setHtmlFontSize);