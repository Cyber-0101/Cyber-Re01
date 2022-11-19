let div1 = document.querySelector('.div1');
document.addEventListener('mousemove', function (e) {
    let oX = window.innerWidth/2;
    let oY = window.innerHeight/2;
    let X = (e.clientY-oY)/oY*30;
    let Y = (e.clientX-oX)/oX*30*(-1);
    let O = 'rotateX('+X+'deg) rotateY('+Y+'deg)';
    div1.style.transform = O         
});