function Evento(){

    function meuEvento(){
        console.log(`Evento ativado`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <buttom event={meuEvento} texto="primeiro Evento"/>
        </div>
    )
}

export default Evento