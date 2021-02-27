import styled from 'styled-components'
import { PropsWithResizableImg, PropsWithCurrentBool } from '../types/styles'

interface Props extends PropsWithCurrentBool, PropsWithResizableImg {}

const Container = styled.div<Props>`
  margin: 
    ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh 
    ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
  min-width: ${ props => props.bgImageWidth || 100 }vw;
  height: ${ props => props.bgImageHeight || 100 }vh;
  transition: background-color 1s;
  background-color: ${ 
    props => props.darkTheme 
      ? 'rgba(10, 10, 10, .7)'
      : 'rgba(250, 250, 250, .7)'
  };
  padding: 2%;
  
  h2{
    color: #${ props => props.darkTheme ? 'ccf' : '117' };
    text-align: right;
    font-size: 2rem;
    transition: all .6s;
    margin: 2% ${ props => props.current ? 5 : 1 }%;
    opacity: ${ props => props.current ? '1' : '0' };
  }
  p{
    margin: 5%;
    width: 80%;
    transition: opacity .8s;
    opacity: ${ props => props.current ? '1' : '0' };
  }
  ::before {
    background-image: url(${ props => props.bgImage });
  }
  @media only screen and (max-width: 1000px){
    padding: 5%;
    p{
      font-size: 1.1rem;
      margin: 1rem;
    }
  }
  @media only screen and (max-width: 500px){
    margin: 0;
    min-width: 100vw;
    height: 100vh;
    p{
      width: 90%;
    }
    h2{
      text-align: left;
      margin: 1rem;
      font-size: 1.5rem;
    }
  }
`

export default Container