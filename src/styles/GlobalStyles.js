import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
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
  }
`;
