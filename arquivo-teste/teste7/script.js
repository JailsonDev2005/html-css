// Criar a primeira function para mostra os elementos dos butoes na tela do display com  o parametro "data"
function naTela(data){
    let txtTela = document.getElementById("display");
    txtTela.value += data;
}


function limpar(){

    display.value = ""


}

function remover(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1)
}


function calcular(){
    let display = document.getElementById("display");

    try{
        display.value = eval(display.value)
    }catch{
        display.value = 'error'
    }
}