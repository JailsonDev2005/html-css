


function Enviar(){
    let num1value = document.getElementById("num1").value;
    let num2value = document.getElementById("num2").value;

    num1valueN = Number(num1value);
    num2valueN = Number(num2value);


    let somaIdade = num1valueN + num2valueN;
    let mediaIdade = (num1valueN + num2valueN) / 2;

    alert(`a soma das idades e ${somaIdade}`);
    alert(`a media das idade e ${mediaIdade}`);
}