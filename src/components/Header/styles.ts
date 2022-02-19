import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 1rem 9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    
    color: #fff;
    background-color: var(--blue-light);
    
    border: 0;
    border-radius: 0.25rem;
    
    padding: 0 2rem;
    height: 3rem;
    
    transition: .2s;

    &:hover {
      filter: brightness(.9);
    }
  }

  @media screen and (max-width: 720px) {
    padding-bottom: 2rem;
  }
`
