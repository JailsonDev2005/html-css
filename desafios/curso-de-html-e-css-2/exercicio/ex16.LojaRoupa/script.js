const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links')
const icon = document.getElementById('i')

menuToggle.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')

    if(navlinks.classList.contains('mobile-menu')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark')
    }else{
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars')
    }
})

function comprar(){
    alert("Produto Comprado")
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".main-container .main-box", {
    ...scrollRevealOption,
   origin:"right",
   delay: 600,
})

ScrollReveal().reveal(".main-container .main-box h2", {
    ...scrollRevealOption,
    origin:"right",
   delay: 700,
})

ScrollReveal().reveal(".main-container .main-box h3", {
    ...scrollRevealOption,
   origin:"right",
   delay: 800,
})

ScrollReveal().reveal(".main-container .main-box p", {
    ...scrollRevealOption,
   origin:"right",
   delay: 900,
})

ScrollReveal().reveal(".nav-links li", {
    ...scrollRevealOption,
   origin:"top",
   delay: 400,
   interval: 300,
})

ScrollReveal().reveal(".icons i", {
    ...scrollRevealOption,
   origin:"top",
   delay: 1000,
   interval: 500,
})

ScrollReveal().reveal(".header-box .logo", {
    ...scrollRevealOption,
   origin:"left",
   delay: 800,
})


 AOS.init();