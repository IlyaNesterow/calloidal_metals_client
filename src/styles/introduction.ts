import styled from 'styled-components'

interface Props {
  bgImage: string
  darkTheme: boolean
}

const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  
  ::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background-image: url(${ props => props.bgImage });
    background-size: cover;
  }
`

export default Container