let btnEntrar = document.getElementById("entrar");
let cadastro = document.getElementById("cadastro");
let login = document.getElementById("login");
let btnCadastro = document.getElementById("btnCadastro");
let logincont = document.getElementById("EntLogin");
let container = document.querySelector(".form-container");


function mudalogin(){
    if(cadastro.classList.contains){
    cadastro.classList.add("active")
    login.classList.add("close")
    }else{
        login.classList.add("active")
        cadastro.classList.remove("active")
    }
}