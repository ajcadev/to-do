import styled from 'styled-components'

export const EmptyContainer = styled.div`
  padding: 48px 24px 0;
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 56px;
    height: 56px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const MessageContainer = styled.div`
  text-align: center;
  color: ${(props) => props.theme['gray-300']};

  p {
    font-weight: bold;
  }
`
