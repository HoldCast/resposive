
//初始化定义html的font-size;
window.onload = function () {
    initHtmlFont();
};
window.addEventListener('resize',initHtmlFont,false);
function initHtmlFont() {
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;     //设备尺寸分辨率(window.screen.width)
    //html.style.fontSize = width / 16 + 'px';            //将屏幕分成16份：iphone5下（320/16） 1rem = 20px;
    //html.style.fontSize = width / 15 + 'px';          //将屏幕分成15份：iphone6下（375/15） 1rem = 25px;
    html.style.fontSize = width / 18 + 'px';          //将屏幕分成15份：iphone6s调试
}