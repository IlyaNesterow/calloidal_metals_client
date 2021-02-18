import styled from 'styled-components'

interface MenuProps {
  darkTheme: boolean
  opened: boolean
}

const Menu = styled.div<MenuProps>`
  #tab{
    height: 100vh;
    width: 300px;
    max-width: 70%;
    position: fixed;
    transition: right .5s;
    top: 0;
    right: ${ props => props.opened ? '0' : '-300px' };
    background-color: #fff;
    z-index: 3;
  }
  
  #shadow{
    height: 100vh;
    width: 100vw;
    position: fixed;
    transition: opacity .5s;
    top: 0;
    left: ${ props => props.opened ? '0' : '-100vw' };
    opacity: ${ props => props.opened ? '.5' : '0' };
    background-color: ${ props => props.darkTheme ? 'rgb(255, 255, 255)' : 'rgb(16, 16, 16)' };
    z-index: 2;
  }
`

export default Menu