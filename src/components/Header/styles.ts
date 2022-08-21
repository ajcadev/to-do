import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-700']};
`
export const HeaderContent = styled.div`
  max-width: 46rem;
  margin: 0 auto;
  padding: 72px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
