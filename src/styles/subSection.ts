import styled from 'styled-components'

interface Props{
  darkTheme: boolean
  current: boolean
  bgImage?: string
  bgImageWidth?: number
  bgImageHeight?: number
  borderBottomForH2: boolean
}

const Container = styled.div<Props>`
  margin: 
    ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh 
    ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
  min-width: ${ props => props.bgImageWidth || 100 }vw;
  min-height: ${ props => props.bgImageHeight || 100 }vh;
  background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .7)' : 'rgba(250, 250, 250, .7)' };
  padding: 1rem;
  overflow: scroll;

  h2{
    color: ${ props => props.darkTheme ? '#eef' : '#111' };
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 100;
    text-align: center;
    transition: all .7s;
    opacity: ${ props => props.current ? 1 : 0 };
    margin: 0 1rem;
    margin-top: ${ props => props.current ? 2: -2 }%;
    padding-bottom: .6rem;
    margin-bottom: .3rem;
    border-bottom: ${ props => props.borderBottomForH2 ? 'solid .1rem #888' : 'none' };
  }
  p{
    color: #${ props => props.darkTheme ? 'eef' : '111' };
    margin: 1rem;
    padding-bottom: .5rem;
    border-bottom: solid 1px #888;
    transition: all 1s;
    font-size: 1.1rem;
    opacity: ${ props => props.current ? 1 : 0 };
  }
  ::before {
    background-image: url(${ props => props.bgImage });
    transition: filter .9s;
    border-radius: .2rem;
    filter: blur(${ props => props.current ? '1px' : '20px' });
    /*box-shadow: ${ props => '0 0 50px 2rem ' + (props.current ? 'transparent' : (props.darkTheme ? '#222' : '#fff')) } inset;*/
  }
`

export default Container