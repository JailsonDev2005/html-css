let menuItem = document.querySelectorAll(".item-menu");

function selectlink(){
    menuItem.forEach((item)=>{
        item.classList.remove('activo');
    });
    this.classList.add('activo');
}

menuItem.forEach((item)=>{
    item.addEventListener("click",selectlink)
});

