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
  padding: 2%;
  
  h2{
    text-align: right;
    font-size: 2rem;
    transition: all .6s;
    margin: 1% ${ props => props.current ? 5 : 1 }%;
    opacity: ${ props => props.current ? '1' : '0' };
  }
  p{ 
    margin: 1%;
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
`

export default Container