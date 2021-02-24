import styled from 'styled-components'


interface Props {
  bgImage?: string
  bgImageWidth?: number
  bgImageHeight?: number
  darkTheme: boolean
}

const Container = styled.div<Props>`
  ::before {
    left: ${ props => props.bgImageWidth ? ((100 - props.bgImageWidth) / 2 ) : 0 }vw;
    top: ${ props => props.bgImageHeight ? ((100 - props.bgImageHeight) / 2 ) : 0 }vh; 
    width: ${ props => props.bgImageWidth }vw; 
    height: ${ props => props.bgImageHeight }vh;
    background-image: url(${ props => props.bgImage });
  }
`

export default Container