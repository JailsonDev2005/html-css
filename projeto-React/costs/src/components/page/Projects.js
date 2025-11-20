import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButtom from "../layout/LinkButtom"

function Projects(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.menssage
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButtom to="/newproject" text="Criar Projeto"/>
            </div>
            <h1>Meus projetos</h1>
            {message && <Message msg={Message} type="success"/>}
            <Container customClass="start">
                <p>projetos...</p>
            </Container>
        </div>
    )
}

export default Projects