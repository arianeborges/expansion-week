import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body{
    background: #4E89AE;
    color: #FFF;
    -webkit-font-smothing: antialiased;
  }

  body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  #root {
    max-width: 50%;
    margin: 0 auto;
    padding: 40px 20px;
  }


`;
