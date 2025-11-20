import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButtom from "../layout/LinkButtom"
import ProjectCard from "../project/ProjectCard"

import {useState, useEffect} from 'react'

 
function Projects(){
    const [Projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.menssage
    }

    useEffect(()=>{
        fetch('https://localhost:5000/projects', {
            method:'GET',
            headers:{
                'content-Type' : 'application/json'
            }
        }).then(resp => resp.json())
        .then(data =>{
            console.log(data)
            setProjects(data)
        })
        .catch(err =>  console.log(err))
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButtom to="/newproject" text="Criar Projeto"/>
            </div>
            <h1>Meus projetos</h1>
            {message && <Message msg={Message} type="success"/>}
            <Container customClass="start">
                {Projects.length > 0 && 
                Projects.map((Projects)=> <projectsCard id={project.name} dubget={} name={Projects.name}/>)}
            </Container>
        </div>
    )
}

export default Projects