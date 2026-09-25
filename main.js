const openNavIcon = document.querySelector('.burger');
const closeNavIcon = document.querySelector('.close-icon');

openNavIcon.addEventListener('click',()=>{
    document.querySelector('nav').classList.add('show');
})

closeNavIcon.addEventListener('click',()=>{
    document.querySelector('nav').classList.remove('show');
})