import styled from 'styled-components'
import { PropsWithBgImg, PropsWithTransformX, PropsWithCurrentNum } from '../types/styles'

interface Props extends PropsWithBgImg, PropsWithTransformX, PropsWithCurrentNum {}

const Container = styled.div<Props>`
  overflow: hidden;

  #ribbon{
    transform: translateX(-${ props => props.transformX }px);
  }
  #wrapper{
    transition: opacity .7s;
    opacity: ${ props => props.current === 0 ? '1' : '0' };
  }
  #intro{
    padding: 2rem;
    background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .6)' : 'rgba(250, 250, 250, .6)' };
  }
  #intro h2{
    font-size: 2.9rem;
    text-align: right;
    margin-right: 20%;
    transition: margin .7s;
    margin-top: ${ props => props.current === 0 ? '0' : '5%' };
    color: #88f;
  }
  #intro p{
    max-width: calc(80% - 5rem);
    transition: margin .7s;
    margin-top: ${ props => props.current === 0 ? '4%' : '20%' };
    margin-left: 10%;
    margin-bottom: 10%;
  }
  #intro::before {
    background-image: url(${ props => props.bgImage });
  }
  @media only screen and (max-width: 1000px){
    #intro h2{
      font-size: 2.5rem;
      text-align: center;
      margin-right: auto;
      margin-top: 1.9rem;
    }
    #intro p{
      max-width: 100%;
      margin-top: 6%;
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 700px){
    #intro h2{
      font-size: 2.2rem;
      margin-top: ${ props => props.current === 0 ? '5%' : '-10%' };
    }
    #intro p{
      max-width: 100%;
    }
  }
`

export default Container