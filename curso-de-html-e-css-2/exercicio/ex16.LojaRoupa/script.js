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