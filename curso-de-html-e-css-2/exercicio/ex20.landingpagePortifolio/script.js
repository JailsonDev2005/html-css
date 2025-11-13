let menuH = document.querySelector(".menu-link");
let navLink = document.querySelector(".nav-bar");
let menuI = menuH.querySelector("i");

menuH.addEventListener("click", ()=>{
 navLink.classList.toggle("open")
})