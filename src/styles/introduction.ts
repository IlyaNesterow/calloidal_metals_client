import styled from 'styled-components'

interface Props {
  bgImage?: string
  darkTheme: boolean
  transformX: number
  current: number
}

const Container = styled.div<Props>`
  position: relative;
  overflow: hidden;

  #intro-ribbon{
    width: auto;
    height: 100vh;
    display: flex;
    transition: transform .4s ease-in;
    transform: translateX(-${ props => props.transformX }px);
  }
  #wrapper{
    transition: opacity .7s;
    opacity: ${ props => props.current === 0 ? '1' : '0' };
  }
  #intro{
    height: 100vh;
    min-width: 100vw;
    padding: 2rem;
    background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .6)' : 'rgba(250, 250, 250, .6)' };
  }
  #intro h2{
    font-size: 2.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    letter-spacing: .1rem;
    text-align: right;
    margin-right: 20%;
    transition: margin .7s;
    margin-top: ${ props => props.current === 0 ? '13%' : '5%' };
    color: #88f;
  }
  #intro p{
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
    max-width: calc(80% - 5rem);
    transition: margin .7s;
    margin-top: ${ props => props.current === 0 ? '8%' : '20%' };
    margin-left: 10%;
  }
  #intro::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-image: url(${ props => props.bgImage });
    background-size: cover;
  }
  #intro::before, #intro-ribbon, #intro, #video{
    min-height: 550px;
  }
  @media only screen and (max-width: 1000px){
    #intro h2{
      font-size: 2.5rem;
      text-align: center;
      margin-right: auto;
      margin-top: 1.9rem;
      color: #88f;
    }
    #intro p{
      font-size: 1.2rem;
      font-family: 'Montserrat', sans-serif;
      max-width: 100%;
      margin-top: 10%;
      line-height: 2rem;
      margin-left: 0;
    }
    #intro::before, #intro-ribbon, #intro, #video {
      min-height: 450px;
    }
  }
  @media only screen and (max-width: 700px){
    #intro h2{
      font-size: 2.2rem;
      margin-top: ${ props => props.current === 0 ? '13%' : '5%' };
      color: #88f;
    }
    #intro p{
      font-size: 1.2rem;
      font-family: 'Montserrat', sans-serif;
      max-width: 100%;
      margin-top: 10%;
      line-height: 2rem;
      margin-left: 0;
    }
  }
`

export default Container