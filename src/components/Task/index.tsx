import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { TaskContainer } from './styles'

type TaskProps = {
  task: {
    id: string
    description: string
    isDone: boolean
  }
}

export function Task({ task }: TaskProps) {
  return (
    <TaskContainer isDone={task.isDone}>
      {task.isDone ? (
        <button>
          <CheckCircle size={24} />
        </button>
      ) : (
        <button>
          <Circle size={24} />
        </button>
      )}
      <span>{task.description}</span>
      <button>
        <Trash size={24} />
      </button>
    </TaskContainer>
  )
}
