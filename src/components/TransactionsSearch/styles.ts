import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;
  height: 3.2rem;
  padding: 0 1.5rem;
  border-radius: 0.25rem;

  border: 1px solid #d7d7d7;
  background-color: var(--shape);

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  @media (min-width: 720px) {
    max-width: 400px;
  }
`
