import styled from "styled-components";

export const MainContainer = styled.section`
  max-width: 46rem;
  margin: 0 auto;
  padding: 72px 16px;
`

export const FormContainer = styled.form`
  margin-top: -6rem;
  margin-bottom: 2rem;

  display: flex;
  gap: 0.5rem;

  input {
    padding: 16px;
    border-radius: 6px;
    background: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-100"]};
    border: 0;

    flex: 1;

    &::placeholder {
      color: ${props => props.theme["gray-300"]};
    }
  }

  button {
    border-radius: 8px;
    padding: 16px;
    background: ${props => props.theme["blue-dark"]};
    color: ${props => props.theme["gray-100"]};
    border: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: ${props => props.theme.blue};
      transition: background-color 0.2s;
    }
  }
`

export const TasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

