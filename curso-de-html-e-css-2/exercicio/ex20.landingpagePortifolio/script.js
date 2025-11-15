let menuH = document.querySelector(".btnMenu");
let navLink = document.querySelector("ul");
let menuI = menuH.querySelector("i");

menuH.addEventListener("click", ()=>{
 navLink.classList.toggle("open")

 let isOpen = navLink.classList.contains("open");
 menuI.setAttribute(
    "class",
    isOpen ? "fa-solid fa-x" : "fa-solid fa-bars"
 );
});

navLink.addEventListener("click", ()=> {
    navLink.classList.remove("open");
    menuH.setAttribute("class", "fa-solid fa-x")
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
}

ScrollReveal().reveal(".imagen img",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".conteudo h3",{
    ...ScrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".conteudo h2",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".conteudo p",{
    ...ScrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".conteudo .btn",{
    ...ScrollRevealOption,
    delay: 2000,
    interval: 500,
})