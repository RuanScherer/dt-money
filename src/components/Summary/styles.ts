import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9rem;

  div {
    background-color: var(--shape);
    color: var(--text-title);

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #FFF;
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 0;
  }
`
