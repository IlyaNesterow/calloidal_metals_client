import styled from 'styled-components'
import { PropsWithTheme } from '../types/styles'

interface Props extends PropsWithTheme{
  isMobile: boolean
}

const Page = styled.div<Props>`
  width: 100vw;
  height: auto;

  #ribbon{
    width: auto;
    height: 100vh;
    display: flex;
    transition: transform .4s ease-in;
  } 
  h2{
    letter-spacing: .1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
  p{
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }
  a{
    display: block;
    color: #${ props => props.darkTheme ? 'fff' : '111' };
    font-size: 1.3rem;
  }
  #first-slide,  
  #sub-section,
  #intro,
  #synthesys,
  #sellers, 
  #pdf-file,
  #ribbon, 
  #video,
  #info,
  #introduction{
    min-height: 500px;
    position: relative;
  }
  #intro,
  #video,
  #other,
  #pdf-file,
  #synthesys{
    height: 100vh;
    min-width: 100vw;
  }
  #first-slide::before,  
  #sub-section::before,
  #intro::before,
  #synthesys::before,
  #sellers::before {
    content: "";
    position: absolute;
    background-size: cover;
    z-index: -1;
    left: 0; top: 0; 
    width: 100%;  height: 100%;
  }
  @media only screen and (max-width: 1000px){
    p{
      font-size: 1.2rem;
    }
    a{
      font-size: 1.1rem;
    }
    #first-slide,  
    #sub-section,
    #intro,
    #synthesys,
    #sellers, 
    #ribbon,
    #video{
      min-height: 450px;
    }
  } 
`

export default Page