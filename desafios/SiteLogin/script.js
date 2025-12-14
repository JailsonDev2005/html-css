let btnToggle = document.querySelector(".toggleBar");
let toggleLinks = document.querySelector(".sidebar");
let icon = btnToggle.querySelector('i');
let a = toggleLinks.querySelectorAll("a")
let btnlogin = document.getElementById("Login")


btnToggle.addEventListener("click", ()=>{
    toggleLinks.classList.toggle("open")

    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")
})


a.forEach(a =>{
    a.addEventListener("click", ()=>{
       toggleLinks.classList.remove("open")
       btnlogin.classList.remove("open")

       icon.classList.add("fa-bars")
       icon.classList.remove("fa-xmark")
    })
})

if(btnlogin){
    btnlogin.addEventListener("click", close)
}

function close(){
    toggleLinks.classList.remove("open")

    icon.classList.add("fa-bars")
    icon.classList.remove("fa-xmark")
}