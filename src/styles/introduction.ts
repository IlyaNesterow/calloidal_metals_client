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
  #intro, #video{
    height: 100vh;
    min-width: 100vw;
  }
  #wrapper{
    transition: opacity .7s;
    opacity: ${ props => props.current === 0 ? '1' : '0' };
  }
  #video{
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: opacity .7s;
    opacity: ${ props => props.current === 1 ? '1' : '0' };
  }
  #video h3{
    text-align: center;
    font-size: 1.8rem;
    transition: margin-top .7s;
    margin-top: ${ props => props.current === 1 ? '0' : '5%' };
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }
  #video iframe{
    width: 80%;
    height: 75%;
    border: none;
    box-shadow: 0 0 .5rem .1rem ${ props => props.darkTheme ? '#fff' : '#222' };
    border-radius: .5rem;
  }
  #intro{
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
  #intro-nav{
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 1rem);
    display: flex;
    width: 2rem;
    z-index: 1;
  }
  #intro-nav div{
    width: 2rem;
    padding: 1rem 0;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bar{
    width: .5rem;
    height: .5rem;
    margin: 0 .3rem;
    border-radius: 1rem;
    display: block;
    transition: all .4s;
    background-color: ${ props => props.darkTheme ? '#eee' : '#222' };
  }
  #current{
    background-color: #3355ff;
    height: .7rem;
    width: .75rem;
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
    #video{
      padding: 1rem;
      padding-top: 5%;
      display: block;
    }
    #video h3{
      font-size: 1.3rem;
    }
    #video iframe{
      width: 90%;
      height: 77%;
      margin-left: 5%;
      margin-top: 3%;
      border: none;
      box-shadow: none;
      border-radius: .5rem;
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
    #video{
      padding-top: 9%;
    }
    #video iframe{
      margin-top: 6%;
    }
  }
`

export default Container