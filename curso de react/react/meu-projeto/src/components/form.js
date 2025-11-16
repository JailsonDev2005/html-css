function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("cadastro finalizado")
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastra"/>
                </div>
            </form>
        </div>
    )
}

export default Form