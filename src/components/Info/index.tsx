import { useInfo } from '../../hooks/useInfo'
import { Created, Done, InfoContainer } from './styles'

export function TasksInfo() {
  const info = useInfo()
  return (
    <InfoContainer>
      <Created>
        <p>Tarefas criadas</p>
        <span>{info.created}</span>
      </Created>
      <Done>
        <p>Concluídas</p>
        {info.done ? (
          <span>
            {info.done} de {info.created}
          </span>
        ) : (
          <span>0</span>
        )}
      </Done>
    </InfoContainer>
  )
}
