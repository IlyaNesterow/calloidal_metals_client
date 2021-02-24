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
    transition: transform 2s ease-in;
    transform: translateX(-${ props => props.transformX }px);
  }
  #intro, #video{
    height: 100vh;
    min-width: 100vw;
  }
  #wrapper{
    transition: opacity 1.5s;
    opacity: ${ props => props.current === 0 ? '1' : '0' };
  }
  #video{
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: opacity 1.5s;
    opacity: ${ props => props.current === 1 ? '1' : '0' };
  }
  #video h3{
    text-align: center;
    font-size: 1.8rem;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }
  #video iframe{
    width: 80%;
    height: 75%;
    border: none;
    box-shadow: 0 0 .2rem ${ props => props.darkTheme ? '#fff' : '#222' };
    border-radius: .5rem;
  }
  #intro{
    padding: 2rem;
    background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .6)' : 'rgba(250, 250, 250, .6)' };
  }
  #intro h2{
    font-size: 2.9rem;
    font-weight: 200;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: .1rem;
    text-align: right;
    margin-right: 20%;
    margin-top: 13%;
    color: #888;
  }
  #intro p{
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
    max-width: calc(80% - 5rem);
    margin-top: 8%;
    margin-left: 10%;
  }
  #intro-nav{
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 2rem);
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
`

export default Container