function Evento(numero){

    function meuEvento(){
        console.log(`Evento ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <buttom onClick={meuEvento}>Ativa</buttom>
        </div>
    )
}

export default Evento