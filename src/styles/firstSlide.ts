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
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #${ props => props.darkTheme ? 'eee' : '222' };
    font-size: 1.5rem;
    width: 80%;
    transition: opacity .8s;
    opacity: ${ props => props.current ? '1' : '0' };
  }
  ::before {
    background-image: url(${ props => props.bgImage });
  }
  @media only screen and (max-width: 1000px){
    p{
      font-size: 1.3rem;
    }
    min-height: 650px;
  }
  @media only screen and (max-width: 500px){
    margin: 0;
    min-width: 100vw;
    height: 100vh;
    p{
      width: 90%;
    }
  }
`

export default Container