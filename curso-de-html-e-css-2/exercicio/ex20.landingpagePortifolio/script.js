let menuH = document.querySelector(".menu-link");
let navLink = document.querySelector(".nav-bar");
let menuI = menuH.querySelector("i");

menuH.addEventListener("click", ()=>{
 navLink.classList.toggle("open")
})

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
}

ScrollReveal().reveal(".principal .img img",{
    ...ScrollRevealOption,
    delay: 3500,
})

ScrollReveal().reveal(".principal .conteudo h3",{
    ...ScrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".principal .conteudo h2",{
    ...ScrollRevealOption,
    delay: 2500,
})

ScrollReveal().reveal(".principal .conteudo p",{
    ...ScrollRevealOption,
    delay: 3000,
})

ScrollReveal().reveal(".principal .conteudo .mainBtn",{
    ...ScrollRevealOption,
    delay: 3500,
    interval: 500,
})