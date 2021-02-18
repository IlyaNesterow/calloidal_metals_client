import { createGlobalStyle } from 'styled-components'

interface props {
  darkTheme: boolean
}

const global = createGlobalStyle<props>`
  ::-webkit-scrollbar { 
    display: none; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
  }
  body {
    transition: background-color .2s;
    background-color: ${ props => props.darkTheme ? '#111' : '#fefefe' };
    position: relative;
    min-height: 100vh;
  }
  a{
    text-decoration: none;
  }
`

export default global