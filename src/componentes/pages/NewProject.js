import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject(){
  const navigate = useNavigate()
  function creatPost(project){
    //Initialize cost and services
    project.cost = 0
    project.services =[]
    const url = "http://localhost:5000/projects"
    const metodo = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project),
    }
    fetch(url,metodo).then((resp) => resp.json())
    .then((data) => {
      //redirect
      navigate('/projects',{state: {message: "Projeto criado com sucesso"}})
    }).catch((err) => alert(err))
  }
  return(
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar o serviço</p>
      <ProjectForm handleSubmit={creatPost} btnText='Criar Projeto' />
    </div>
  )
}
export default NewProject