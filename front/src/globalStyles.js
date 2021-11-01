import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #7d97f4;
    --error-color: #E9605A;
    --gray: #F0F0F0;
    --gray-dark: #D0D0D0;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    border: none;
    outline: none;
    background: transparent;
  }
`;