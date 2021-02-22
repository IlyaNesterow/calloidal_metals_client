import styled from 'styled-components'

interface Props {
  darkTheme: boolean
  transformY: number
}

const Page = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  #ribbon{
    transform: translateY(${ props => props.transformY }px);
    transition: transform .5s ease-in-out;
  }
`

export default Page