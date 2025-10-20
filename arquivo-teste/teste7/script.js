function inseri(data){
    let display = document.getElementById("display");
    display.value += data;
}

function limpar(){
    let C = document.getElementById("display");
    C.value = "";
}

function remover(){
    let remover = document.getElementById("display");
    remover.value = display.value.slice(0, -1)
}

function calcular(){
    let remover = document.getElementById("display");
    try{
        display.value = eval(display.value)
    }catch{
        display.value = "erro"
    }
}