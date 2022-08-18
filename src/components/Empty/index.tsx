import { EmptyContainer, MessageContainer } from "./styles";
import clipboardImg from '../../assets/clipboard.svg'
export function Empty(){
  return (
    <EmptyContainer>
      <img src={clipboardImg} alt="" />
      <MessageContainer>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </MessageContainer>
    </EmptyContainer>
  )
}