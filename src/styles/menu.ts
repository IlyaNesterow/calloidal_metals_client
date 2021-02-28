import styled from 'styled-components'
import { MenuProps } from '../types/styles'


const Menu = styled.div<MenuProps>`
  #tab{
    height: 100vh;
    width: 312px;
    max-width: 85%;
    position: fixed;
    transition: right .5s;
    top: 0;
    right: ${ props => props.opened ? '0' : '-320px' };
    background-color: ${ props => props.darkTheme ? '#111' : '#fff' };
    z-index: 3;
  }
  
  #shadow{
    height: 100vh;
    width: 100vw;
    position: fixed;
    transition: opacity .5s;
    top: 0;
    left: ${ props => props.opened ? '0' : '-100vw' };
    opacity: ${ props => props.opened ? '.8' : '0' };
    background-color: ${ props => props.darkTheme ? 'rgb(255, 255, 255)' : 'rgb(16, 16, 16)' };
    z-index: 2;
  }
`

export default Menu