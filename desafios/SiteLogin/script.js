let btnEntrar = document.getElementById("entrar");
let cadastro = document.getElementById("cadastro");
let login = document.getElementById("login");
let btnCadastro = document.getElementById("btnCadastro");



btnEntrar.addEventListener("click", ()=>{
    if(cadastro.style.display = "flex"){
        cadastro.style.display = "none"
        login.style.display = "flex"
    }
})

 btnCadastro.addEventListener("click", ()=>{
    if(cadastro.style.display = "none"){
        cadastro.style.display = "flex"
        login.style.display = "none"
    }
})
