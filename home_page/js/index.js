// 背景定位
let div1_1 = document.querySelector(".div1_1");
let div1 = document.querySelector(".div1");
// 大箭头定位
let a_1 = document.querySelector(".a_1");
let a_m1 = document.querySelector(".a_m1");
let a_r1 = document.querySelector(".a_r1");
let a_mr1 = document.querySelector(".a_mr1");
let div2 = document.querySelector(".div2");
// 文字定位
let div1_1_1 = document.querySelector(".div1_1_1");

let j_event = false;
let j_animete = false;
let input_1 = document.querySelector("#input_1");
let but_1 = document.querySelector("#but_1");
let but_2 = document.querySelector("#but_2");
let e_date = window.localStorage.getItem('event');
let a_date = window.localStorage.getItem('animate')
//判断动画显示
if (a_date){
    var animation = animate_min()
    c_animate()
}else{
    var animation = animate_max()
}
//页面加载完成后触发
window.addEventListener('load',animation);
// 判断事情显示
if (e_date){
    input_1.value = e_date;
    c_event();
}

function c_event(){ //改变事情
    if (j_event){
        j_event = false;
        but_1.innerText = '✔';
        input_1.style.borderBottomColor = '#fff';
        input_1.value = '';
        input_1.readOnly = false;
        window.localStorage.removeItem('event');
    }else{
        j_event = true;
        but_1.innerText = '✘';
        input_1.style.borderBottomColor = 'transparent';
        input_1.readOnly = true;
        window.localStorage.setItem('event',input_1.value);
    }
}

function c_animate(){ //改变是否触发动画
    if (j_animete){
        j_animete = false;
        but_2.innerText = '打开动画 ✔'
        but_2.style.color = '#ecebf0c4'
        window.localStorage.removeItem('animate')
    }else{
        j_animete = true;
        but_2.innerText = '关闭动画 ✘'
        but_2.style.color = '#ecebf052'
        window.localStorage.setItem('animate','y')
    }
}
// 启动动画
function animate_min() {
    setTimeout(() => { //背景图片动画
        div1.style.backgroundSize = '100vw 100vh'
    }, 0);
    setTimeout(() => { // 背景颜色调整
        div1_1.style.backgroundColor = '#23252900'; 
    }, 100);
    setTimeout(() => { // 背景颜色调整
        div1_1.style.backgroundColor = '#23252971';
    }, 200);
    setTimeout(() => { // 文案透明度
        div1_1_1.style.opacity = '1';
    }, 200);
}
// 启动动画
function animate_max() {
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

