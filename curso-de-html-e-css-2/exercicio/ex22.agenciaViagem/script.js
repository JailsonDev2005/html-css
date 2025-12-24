let btnNav = document.querySelector(".btnBars");
let nav = document.querySelector(".nav");
let btnIcon = btnNav.querySelector("i");
let link = nav.querySelectorAll("a");

btnNav.addEventListener("click", ()=>{
    nav.classList.toggle("open")
        btnIcon.classList.toggle("fa-bars")
        btnIcon.classList.toggle("fa-xmark")
})


link.forEach(link =>{
    link.addEventListener("click", ()=>{
        nav.classList.remove("open")
        btnIcon.classList.add("fa-bars")
        btnIcon.classList.remove("fa-xmark")
    })
})







window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});