import { FormContainer, MainContainer, TasksList } from "./styles";
import { PlusCircle } from "phosphor-react";
import { Task } from "../Task";
import { TasksInfo } from "../Info";
import { Empty } from "../Empty";
import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Header } from "../Header";

export function Tasks() {
  const { tasks } = useContext(TasksContext)
  const numberOfTasks = tasks.length  
  return (
    <>
      <Header />
      <MainContainer>
        <FormContainer>
          <input placeholder="Adicione uma nova tarefa"/>
          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={24} />
          </button>
        </FormContainer>
        <TasksInfo />

        {numberOfTasks ? (
          <TasksList>
            {tasks.map(task => {
              return <Task key={task.id} task={task} />
            })}
          </TasksList>
        ) : (
          <Empty />
        )}
      </MainContainer>
    </>
  )
}