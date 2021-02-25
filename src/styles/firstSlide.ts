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
  min-height: ${ props => props.bgImageHeight || 100 }vh;
  background-color: ${ props => props.darkTheme ? 'rgba(10, 10, 10, .7)' : 'rgba(250, 250, 250, .7)' };
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
`

export default Container