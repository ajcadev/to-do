import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { TaskContainer } from './styles'

type TaskProps = {
  task: {
    id: string
    description: string
    isDone: boolean
  }
}

export function Task({ task }: TaskProps) {
  const { deleteTask, updateTask } = useContext(TasksContext)

  async function handleDeleteTask() {
    await deleteTask(task.id)
  }

  async function handleUpdateTask() {
    await updateTask(task)
  }

  return (
    <TaskContainer isDone={task.isDone}>
      {task.isDone ? (
        <button onClick={handleUpdateTask}>
          <CheckCircle size={24} />
        </button>
      ) : (
        <button onClick={handleUpdateTask}>
          <Circle size={24} />
        </button>
      )}
      <span>{task.description}</span>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </TaskContainer>
  )
}
