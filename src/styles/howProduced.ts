import styled from 'styled-components'


interface Props {
  bgImage?: string
  darkTheme: boolean
  current: boolean
}

const Container = styled.div<Props>`
  margin: 0;
  min-width: 100vw;
  height: 100vh;
  min-height: 400px;
  transition: background-color 1s;
  background-color: ${ 
    props => props.darkTheme 
      ? (props.current ? 'rgba(10, 10, 10, .7)' : '#111') 
      : (props.current ? 'rgba(250, 250, 250, .7)' : '#fff') 
  };
 
  position: relative;
  padding: 5%;
  
  h2{
    text-align: center;
    width: 100%;
    margin: .5rem;
    font-size: 2rem;
    transition: opacity .8s;
    opacity: ${ props => props.current ? 1 : 0 };
    color: #${ props => props.darkTheme ? 'eef' : '111' };
  }
  p{
    color: #${ props => props.darkTheme ? 'eee' : '333' };
    transition: all 1s;
    opacity: ${ props => props.current ? 1 : 0 };
    margin: 5% 10%;
    margin-top: ${ props => props.current ? 10 : 5 }%;
    width: 80%;
    font-size: 1.2rem;
  }
  ::before {
    content: "";
    position: absolute;
    background-size: cover;
    left: 0vw;
    top: 0vh; 
    width: 100vw; 
    height: 100vh;
    min-height: 400px;
    background-image: url(${ props => props.bgImage });
    z-index: -1;
  }
  @media only screen and (max-width: 1000px){
    h2{
      text-align: left;
      margin: 3% 1rem;
      font-size: 1.6rem;
    }
    p{
      width: 90%;
      margin: 1rem;
      margin-top: ${ props => props.current ? 3 : 1 }rem;
      font-size: 1rem;
    }
  } 
  @media only screen and (max-width: 750px){
    h2{
      margin: 2% 1rem;
      font-size: 1.4rem;
    }
  }
`

export default Container