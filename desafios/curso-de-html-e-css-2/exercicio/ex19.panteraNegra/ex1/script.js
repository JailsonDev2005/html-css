const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener("click", () =>{
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isopen ? "ri-close-line" : "ri-menu-3-line"
    );
    navlinks.addEventListener("click", () =>{
        navlinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line")
    })
})


const scrollRevealOption = {
    distance: "50px",
    origin: "buttom",
    duration: 2000,
}

ScrollReveal().reveal(".header__container h1", {
    ...scroll,
    delay: 500,
})

ScrollReveal().reveal(".header__container p", {
    ...scroll,
    delay: 1000,
})

ScrollReveal().reveal(".header__container .header__btn", {
    ...scroll,
    delay: 1500,
})

ScrollReveal().reveal(".socials li", {
    ...scroll,
    delay: 2000,
    interval: 250,
})
