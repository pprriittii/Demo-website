let burgar=document.querySelectorAll(".burgar");
let nav=document.querySelector(".nav");
let rightnav=document.querySelector(".rightnav");
let navlist=document.querySelector(".navlist");

burgar.addEventListener("click",()=>{
    navlist.classList.toggle("op-res");
    rightnav.classList.toggle("op-res");
    nav.classList.toggle("h-nav-res");

});