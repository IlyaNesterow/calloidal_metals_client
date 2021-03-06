import { createGlobalStyle } from 'styled-components'
import { PropsWithTheme } from '../types/styles'


const global = createGlobalStyle<PropsWithTheme>`
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
  .no-select{
    user-select: none; 
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  body {
    transition: background-color .2s;
    overflow-x: hidden;
    background-color: ${ props => props.darkTheme ? '#111' : '#fefefe' };
    position: relative;
    min-height: 100vh;
  }
  a{
    text-decoration: none;
    color: #${ props => props.darkTheme ? 'fff' : '111' };
    display: block;
  }
  p{
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }

  .bar{
    background-color: ${ props => props.darkTheme ? '#fff' : '#222' };
  }
  #nav #section-link p{
    color: #${ props => props.darkTheme ? '5599ff' : '3355ff' };
  }
  #nav .invisible{
    border-left-color: #${ props => props.darkTheme ? 'fff' : '333' };
  }
  #nav .current{
    border-left-color: #${ props => props.darkTheme ? '5599ff' : '3355ff' };
  }
  #first-slide{
    background-color: ${ 
      props => props.darkTheme 
        ? 'rgba(10, 10, 10, .7)'
        : 'rgba(250, 250, 250, .7)'
    };
  }
  #first-slide h2{
    color: #${ props => props.darkTheme ? 'ccf' : '117' };
  }
  #sub-section{
    background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .7)' : 'rgba(250, 250, 250, .7)' };
  }
  #sub-section h2{
    color: ${ props => props.darkTheme ? '#eef' : '#111' };
  }
  #sub-section p{
    color: #${ props => props.darkTheme ? 'eef' : '111' };
  }
  #sub-section-element{
    color: #${ props => props.darkTheme ? 'ddf' : '113' };
  }
  #pdf-file h3 {
    color: #${ props => props.darkTheme ? 'eee' : '333' };
  }
  #intro{
    background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .6)' : 'rgba(250, 250, 250, .6)' };
  }
  #video h3 {
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }
  #video iframe{
    box-shadow: 0 0 .5rem .1rem ${ props => props.darkTheme ? '#fff' : '#222' };
  }
  #other h2{
    color: #${ props => props.darkTheme ? 'fff' : '111' };
  }
`

export default global