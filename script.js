var menu=document.querySelector('.btn-menu');
var nav=document.querySelector('.nav');
var btn=document.querySelector('.start');
var btn1=document.querySelector('.end');
var link=document.querySelector('.nav__list');
var over=document.querySelector('.over');
// var link1=document.querySelectorAll('.nav__link');

menu.addEventListener('click',function (){
        menu.classList.toggle('open');
        nav.classList.toggle('open');
        btn.classList.toggle('open');
        btn1.classList.toggle('open');
        over.classList.toggle('overlay');

})

link.addEventListener('click',function (){
        menu.classList.remove('open');
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn1.classList.remove('open');
        over.classList.remove('overlay');
})
over.addEventListener('click',function (){
        menu.classList.remove('open');
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn1.classList.remove('open');
        over.classList.remove('overlay');
})
// link1.forEach(function(a){
//     a.addEventListener('click',function (){
//         menu.classList.remove('open');
//         nav.classList.remove('open');
//         btn.classList.remove('open');
//         btn1.classList.remove('open');
// })
// })