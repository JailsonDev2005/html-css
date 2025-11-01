


function Enviar(){
    let inpuvalue = document.getElementById('num1').value;
    let inpuvalue2 = document.getElementById('num2').value;

    inpuvalueN = Number(inpuvalue);
    inpuvalue2N = Number(inpuvalue2);

   var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperstion,calculo;
    if(selectOperation == 'adicao'){
        nameOperstion = 'adição';
        calculo = inpuvalueN + inpuvalue2N;
    }

    if(selectOperation == 'subtracao'){
        nameOperstion = 'subtração';
        calculo = inpuvalueN - inpuvalue2N;
    }

    if(selectOperation == 'multiplicacao'){
        nameOperstion = 'mutiplicaçao'
        calculo = inpuvalueN * inpuvalue2N;
    }

    if(selectOperation == 'divisao'){
        nameOperstion = 'divisao'
        calculo = inpuvalueN / inpuvalue2N
    }

    

    alert(calculo)
}