
const offCanvasMenu = document.querySelector('.off-canvas');
const burgerBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-x');
burgerBtn.addEventListener('click' ,()=> offCanvasMenu.style.width = "50%");
closeBtn.addEventListener('click' , ()=> offCanvasMenu.style.width = null);
