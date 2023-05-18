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
  }

`

export default GlobalStyle
