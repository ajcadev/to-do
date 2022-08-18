import { useContext } from "react"
import { TasksContext } from "../../contexts/TasksContext"
import { Created, Done, InfoContainer } from "./styles"

export function TasksInfo() {
  const { tasks } = useContext(TasksContext)
  const created = tasks.length
  const done = tasks.filter(task => task.isDone).length

  return (
    <InfoContainer>
      <Created>
        <p>Tarefas criadas</p>
        <span>{created}</span>
      </Created>
      <Done>
        <p>Concluídas</p>
        { done ? (
          <span>{done} de {created}</span>
        ) : (
          <span>0</span>
        ) }
      </Done>
    </InfoContainer>

  )  
}



