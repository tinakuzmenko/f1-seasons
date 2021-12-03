import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', 'Arial', sans-serif;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.primaryColor};
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
`;
