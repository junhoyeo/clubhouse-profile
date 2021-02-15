import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: #eeecdd;
  }

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
