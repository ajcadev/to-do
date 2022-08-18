import { createContext, ReactNode, useEffect, useState } from 'react';

interface Task {
  id: number;
  description: string;
  isDone: boolean
}

interface TaskContextType {
  tasks: Task[];
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TaskContextType);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    const response = await fetch('http://localhost:3333/tasks')
    const data = await response.json()

    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, []);

  return (
    <TasksContext.Provider value={{ tasks }}>
      {children}
    </TasksContext.Provider>
  );
}