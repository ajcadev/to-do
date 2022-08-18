import styled from "styled-components";

export const InfoContainer = styled.div`
  font-weight: bold;
  margin-top: 64px;

  p {
    font-size: 0.875rem;
  }

  span {
    padding: 2px 8px;
    border-radius: 999px;
    background: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-200"]};
    font-size: 0.75rem;
  }

  display: flex;
  justify-content: space-between;
`
export const Created = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${props => props.theme.blue};
  }
`
export const Done = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    color: ${props => props.theme.purple};
  }
`
