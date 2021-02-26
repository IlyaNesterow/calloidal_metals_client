import styled from 'styled-components'

interface Props {
  darkTheme: boolean
  current: boolean 
  bgImage?: string
  bgImageWidth?: number
  bgImageHeight?: number
}

const Container = styled.div<Props>`
  margin: 
    ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh 
    ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
  min-width: ${ props => props.bgImageWidth || 100 }vw;
  height: ${ props => props.bgImageHeight || 100 }vh;
  transition: background-color 1s;
  background-color: ${ 
    props => props.darkTheme 
      ? (props.current ? 'rgba(10, 10, 10, .7)' : '#111') 
      : (props.current ? 'rgba(250, 250, 250, .7)' : '#fff')
  };
  padding: 2%;
  
  h2{
    color: #${ props => props.darkTheme ? 'ccf' : '117' };
    text-align: right;
    font-size: 2rem;
    margin: 2% 5%;
  }
  p{
    color: #${ props => props.darkTheme ? 'eee' : '222' };
    font-size: 1.3rem;
    margin: 5%;
    width: 80%;
    transition: opacity .8s;
    opacity: ${ props => props.current ? '1' : '0' };
    font-family: Roboto, sans-serif;
  }
  ::before {
    background-image: url(${ props => props.bgImage });
  }
  min-height: 550px;
  @media only screen and (max-width: 1000px){
    padding: 5%;
    p{
      font-size: 1.1rem;
      margin: 1rem;
    }
    min-height: 450px;
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