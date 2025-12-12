let entrar = document.getElementById("entrar");
let cadastro = document.getElementById("cadastro");
let login = document.getElementById("login");
let criar = document.getElementById("criar")
console.log(entrar)
console.log(cadastro)

entrar.addEventListener("click", ()=>{
    if(cadastro.style.display ="flex"){
    cadastro.style.display = "none"
    login.style.display = "flex"
    }
})

criar.addEventListener("click", ()=>{
    if(cadastro.style.display = "none"){
    cadastro.style.display = "flex"
    login.style.display = "none"
    }
})