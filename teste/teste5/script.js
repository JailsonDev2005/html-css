const menu = document.querySelector('.menu-hamburger');
const navlinks = document.querySelector('.nav-links');

menu.addEventListener('click', () =>{
    navlinks.classList.toggle('mobile-menu')
})