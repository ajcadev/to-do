import { FormContainer, MainContainer, TasksList } from './styles'
import { PlusCircle } from 'phosphor-react'
import { Task } from '../Task'
import { TasksInfo } from '../Info'
import { Empty } from '../Empty'
import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { Header } from '../Header'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTaskFormSchema = z.object({
  description: z.string(),
})

type NewTaskFormInputs = z.infer<typeof newTaskFormSchema>

export function Tasks() {
  const { tasks, createTask } = useContext(TasksContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTaskFormInputs>({ resolver: zodResolver(newTaskFormSchema) })

  const numberOfTasks = tasks.length

  async function handleCreateNewTask(data: NewTaskFormInputs) {
    const { description } = data
    await createTask({ description })
    reset()
  }

  return (
    <>
      <Header />
      <MainContainer>
        <FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            {...register('description')}
          />
          <button type="submit" disabled={isSubmitting}>
            <span>Criar</span>
            <PlusCircle size={24} />
          </button>
        </FormContainer>
        <TasksInfo />
        {numberOfTasks ? (
          <TasksList>
            {tasks.map((task) => {
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
