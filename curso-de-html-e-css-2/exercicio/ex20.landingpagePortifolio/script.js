const menuIcon = document.querySelector(".menu-link i");
const navBar = document.querySelector(".nav-bar");

function Menubtn() {
    navBar.classList.toggle("active");
    if (navBar.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        navBar.style.display = "flex";
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        navBar.style.display = "none";
    }
}