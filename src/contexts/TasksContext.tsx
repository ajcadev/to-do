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
    const response = await api.post('/tasks', newTask)
    setTasks((state) => [response.data, ...state])
  }

  async function fetchTasks(query?: string) {
    const response = await api.get('tasks', { params: { q: query } })
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks, createTask }}>
      {children}
    </TasksContext.Provider>
  )
}
