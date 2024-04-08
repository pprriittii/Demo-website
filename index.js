let rightnav=document.querySelector('.rightnav')
let burgar=document.querySelector('.burgar')
let navlist=document.querySelector('.navlist')
let nav=document.querySelector('.nav')

burgar.addEventListener('click',()=>{
nav.classList.toggle('h-nav-res');
navlist.classList.toggle('op-res');
rightnav.classList.toggle('op-res');
})