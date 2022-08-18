import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContext"

export function useInfo(){
  const { tasks } = useContext(TasksContext)
  const created = tasks.length
  const done = tasks.filter(task => task.isDone).length
  return {created, done}
}