import styled, { css } from "styled-components";

type TaskContainerProps = {
  isDone: boolean
}

export const TaskContainer = styled.li<TaskContainerProps>`
  background: ${props => props.theme["gray-500"]};
  padding: 16px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  span {
    flex: 1;
    ${props => props.isDone && css`
      text-decoration: line-through;
      color: ${props => props.theme["gray-300"]}    
    `}
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: ${props => props.isDone ? props.theme["purple"] : props.theme["blue"]};

    &:hover {
      color: ${props => props.isDone ? props.theme["purple-dark"] : props.theme["blue-dark"]};
    }

    &:last-child {
      color: ${props => props.theme["gray-300"]};
    }

    &:last-child:hover {
      color: ${props => props.theme.danger};
    }
}
`