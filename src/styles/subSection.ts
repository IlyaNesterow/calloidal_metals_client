import styled from 'styled-components'
import { PropsWithResizableImg, PropsWithCurrentBool } from '../types/styles'

interface Props extends PropsWithCurrentBool, PropsWithResizableImg{
  borderBottomForH2: boolean
}

const Container = styled.div<Props>`
  margin: 
    ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh 
    ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
  min-width: ${ props => props.bgImageWidth || 100 }vw;
  height: ${ props => props.bgImageHeight || 100 }vh;
  padding: 1rem;
  padding-left: ${ props => props.bgImageWidth === 100? '8%' : 0 };
  overflow: scroll;

  h2 {
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
    margin: 1rem;
    padding-bottom: .5rem;
    border-bottom: solid 1px #888;
    transition: all 1s;
    font-size: 1.1rem;
    opacity: ${ props => props.current ? 1 : 0 };
  }
  li{
    transition: opacity 1.4s;
    opacity: ${ props => props.current ? 1 : 0 };
  }
  ::before {
    background-image: url(${ props => props.bgImage });
    transition: filter .9s;
    border-radius: .2rem; 
    filter: blur(${ props => props.current ? '1px' : '20px' });
  }
  @media only screen and (max-width: 1000px){
    h2{
      padding-bottom: 1rem;
      font-size: 1.6rem;
    }
    height: 100vh;
    margin: 0;
    min-width: 100vw;
    padding: 1rem;
    overflow: hidden;
  }
`

export default Container