import { createContext, ReactNode, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { api } from '../lib/axios'

interface Task {
  id: string
  description: string
  isDone: boolean
}

interface CreateTaskInput {
  description: string
}

interface TaskContextType {
  tasks: Task[]
  fetchTasks: (query?: string) => Promise<void>
  createTask: (data: CreateTaskInput) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  updateTask: (id: Task) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TaskContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  async function createTask(data: CreateTaskInput) {
    const { description } = data
    const newTask = { id: uuidv4(), description, isDone: false }

    // vai lá no back-end e cria um novo registro
    const response = await api.post('/tasks', newTask)

    // essa linha serve apenas para atualizar a tela
    setTasks((state) => [response.data, ...state])
  }

  async function deleteTask(id: string) {
    // vai lá no back-end e deleta o registro!
    await api.delete(`/tasks/${id}`)

    // essas duas linhas servem apenas para atualizar a tela!
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks([...newTasks])
  }

  async function updateTask(task: Task) {
    const id = task.id
    // vai lá do back-end e atualiza o registro!
    await api.patch(`/tasks/${id}`, { ...task, isDone: !task.isDone })

    // essas linhas servem apenas para atualizar a tela
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone }
      } else {
        return task
      }
    })
    setTasks([...newTasks])
  }

  async function fetchTasks(query?: string) {
    // vai lá no back-end e carrega as tasks
    const response = await api.get('/tasks', { params: { q: query } })

    // essa linha serve apenas para atualizar a tela
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider
      value={{ tasks, fetchTasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}
