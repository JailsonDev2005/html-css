const menuBtn = document.getElementById('btnMudar');
const navLinks = document.getElementById('nav-links');
const icon = document.getElementById('i')

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open")

    if (icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-xmark')
}else {
    icon.classList.remove('fa-xmark')
    icon.classList.add('fa-bars')
}
})

