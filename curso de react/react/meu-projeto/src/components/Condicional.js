import {use, useState} from 'react'

function Condicional() {

        const [email, setEmail] = useState()
        const [userEmail, setUserEmail] = useState()

        function enviarEmail(e){
            e.preventDefault()
            setUserEmail(email)
            console.log(userEmail)
        }

        function limparEmail (e){
            setUserEmail('')
            console.log(userEmail)
        }

    return(
        

        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar-email</button>
                {userEmail && (
                 <div>
                        <p>O e-mail do usuario é:{userEmail}</p>
                        <buttom onClick={limparEmail}>Limpar e-mail</buttom>
                    </div>
                    
                 )}
                
            </form>
            
        </div>
    )

}

export default Condicional