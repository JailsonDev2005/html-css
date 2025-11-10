function Pessoa ({nome, idade, profissao, foto}){
    return(
        <div>
            <imag src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa