import { ThemeProvider } from "styled-components";
import { Tasks } from "./components/Tasks";
import { TasksProvider } from "./contexts/TasksContext";
import { GlobalStyles } from "./styles/global";
import {defaultTheme} from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TasksProvider>
        <Tasks />
      </TasksProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
