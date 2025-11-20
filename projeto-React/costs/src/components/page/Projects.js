import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.menssage
    }

    return(
        <div>
            <h1>Meus projetos</h1>
            {message && <Message msg={Message} type="success"/>}
        </div>
    )
}

export default Projects