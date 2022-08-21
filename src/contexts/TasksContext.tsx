import { createContext, ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { api } from '../lib/axios';

interface Task {
  id: string;
  description: string;
  isDone: boolean
}

interface SubTask {
  description: string
}

interface TaskContextType {
  tasks: Task[];
  fetchTasks: (query?: string) => Promise<void>
  createNewTask: (data: SubTask) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TaskContextType);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function createNewTask({ description }: SubTask) {
    const newTask = {
      id: uuidv4(),
      description,
      isDone: false
    }
    setTasks([...tasks, newTask])
  }

  async function fetchTasks(query?: string) {
    const response = await api.get('tasks', { params: { q: query } })
    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks, createNewTask }}>
      {children}
    </TasksContext.Provider>
  );
}