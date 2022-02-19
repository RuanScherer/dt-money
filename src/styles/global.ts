import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  ::-webkit-scrollbar {
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 0.25rem;
    
    background-color: #e5e5e5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    
    border-radius: 0.25rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: .3s;
  }

  html {
    @media (min-width: 721px) and (max-width: 1080px) {
      font-size:  93.75%; // equal to 15px by default
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // equal to 14px by default
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;

    background-color: var(--background);

    padding: 3rem;
    border-radius: 0.25rem;

    position: relative;
  }

  .react-modal-close {
    position: absolute;

    right: 1.5rem;
    top: 1.5rem;

    border: 0;
    background-color: transparent;

    &:hover {
      filter: brightness(0.8);
    }
  }
`