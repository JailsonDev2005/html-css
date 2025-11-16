import {usestate} from "react"

function Form(){

    const [Name, satName] = usaState()
    const [Password, satPassword] = usaState()

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`usuario ${Name} foi cadatrado com a senha ${Password}`)
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu nome" value={Name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                     <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" value={Password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastra"/>
                </div>
            </form>
        </div>
    )
}

export default Form