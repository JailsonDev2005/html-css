let menuBtn = document.querySelector('.menu-btn');
let navlinks = document.querySelector('ul');
let menuBtnIcon = menuBtn.querySelector('i')


menuBtn.addEventListener("click",()=>{
    navlinks.classList.toggle("open");

    let isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"fa-solid fa-x" : "fa-solid fa-bars")
})

navlinks.addEventListener("click",()=>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars")
})