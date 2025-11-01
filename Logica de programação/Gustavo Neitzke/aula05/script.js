
function Enviar(){
    let input = document.getElementById
    ("num1").value;
    let tela = document.querySelector('h2')
    inputNumero = Number(input);

    let calculosFahrenheit = (inputNumero * 1.8) + 32; 

    tela.innerHTML = `são ${calculosFahrenheit} Fahrenheit `;

    document.getElementById("num1").value = "";
}