import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  button {
    border: 0;

    &:focus {
      outline: none;
    }
  }

  html {
    background-color: #edeade;
  }

  body {
    margin: 0;
    color: #262626;
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
