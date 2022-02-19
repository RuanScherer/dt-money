import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead > tr > th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;

      padding: 1rem 2rem;
    }

    tbody > tr > td {
      padding: 1rem 2rem;
      border: 0;

      background-color: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        font-weight: 500;
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
