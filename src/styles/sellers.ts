import styled from 'styled-components'


interface Props {
  bgImage?: string
  bgImageWidth?: number
  bgImageHeight?: number
  darkTheme: boolean
  current: boolean
}

const Container = styled.div<Props>`
  margin: 
    ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh 
    ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
  min-width: ${ props => props.bgImageWidth || 100 }vw;
  height: ${ props => props.bgImageHeight || 100 }vh;
  transition: background-color .4s;
  background-color: ${ 
    props => props.darkTheme 
      ? (props.current ? 'rgba(10, 10, 10, .7)' : '#111') 
      : (props.current ? 'rgba(250, 250, 250, .7)' : '#fff')
  };
  padding: 2%;
  position: relative;

  h2{
    color: #${ props => props.darkTheme ? 'fff' : '333' };
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1rem;
    margin-bottom: 3%;
    border-bottom: solid 1px #888;
  }
  a{
    opacity: ${ props => props.current ? 1 : 0 };
  }
  ::before {
    width: ${ props => props.bgImageWidth }vw; 
    height: ${ props => props.bgImageHeight }vh;
    background-image: url(${ props => props.bgImage });
  }
  @media only screen and (max-width: 1000px){
    padding: 3%;
    h2{
      font-size: 1.5rem;
      text-align: left;
    }
  }
  @media only screen and (max-width: 500px){
    margin: 0;
    width: 100vw; height: 100vh;
    ::before{
      width: 100%; height: 100%;
    }
    h2{
      margin-top: 20%;
    }
  }
`

export default Container