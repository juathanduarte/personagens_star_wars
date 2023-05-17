import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,500&display=swap');

  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Sono', sans-serif;

    @media screen and (max-width: 400px) {
      font-size: 14px;
    }
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: white;
    scroll-behavior: smooth;
    color: #666;
  }
`

export default GlobalStyle
