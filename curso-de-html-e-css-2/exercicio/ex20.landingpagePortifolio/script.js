let btnLinks = document.querySelector(".btnLinks");
let navegacao = document.querySelector(".navegacao");
let icon = btnLinks.querySelector("i");
let link = navegacao.querySelectorAll("a")


btnLinks.addEventListener("click", ()=>{
    navegacao.classList.toggle("open")
    icon.classList.toggle("fa-xmark")
    icon.classList.toggle("fa-bars")
})

link.forEach(link => {
    link.addEventListener("click", ()=>{
        navegacao.classList.toggle("open")
        icon.classList.toggle("fa-xmark")
        icon.classList.toggle("fa-bars")
    })
})
