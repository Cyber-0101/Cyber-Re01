// 背景定位
const div1_1 = document.querySelector(".div1_1");
const div1 = document.querySelector(".div1");
// 大箭头定位
const a_1 = document.querySelector(".a_1");
const a_m1 = document.querySelector(".a_m1");
const a_r1 = document.querySelector(".a_r1");
const a_mr1 = document.querySelector(".a_mr1");
const div2 = document.querySelector(".div2");
// 文字定位
const div1_1_1 = document.querySelector(".div1_1_1");

//页面加载完成后触发
window.addEventListener('load',start())

// 启动动画
function start() {
    div2.style.display = 'block';
    setTimeout(() => { //大箭头动画
        a_1.style.left = '100vw';
        a_r1.style.left = '-75vh';
        a_m1.style.left = '100vw';
        a_mr1.style.left = '-25vh';
    }, 10);
    setTimeout(() => { //背景图片动画
        div1.style.backgroundSize = '100vw 100vh'
    }, 250);
    setTimeout(() => { // 背景颜色调整
        div1_1.style.backgroundColor = '#23252900'; 
    }, 500);
    setTimeout(() => { //隐藏动画div
        div2.style.display = 'none';
    }, 1500);
    setTimeout(() => { // 背景颜色调整
        div1_1.style.backgroundColor = '#23252971';
    }, 2000);
    setTimeout(() => { // 文案透明度
        div1_1_1.style.opacity = '1';
    }, 2000);
}

