import styled from 'styled-components'


interface Props {
  darkTheme: boolean
  transformY: number
  isMobile: boolean
}

const Page = styled.div<Props>`
  width: 100vw;
  height: auto;

  #ribbon{
    transform: translateY(${ props => props.transformY }px);
    transition: transform .5s ease-in-out;
  }

  .page-with-bg-img{
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .page-with-bg-img::before {
    content: "";
    position: absolute;
    background-size: cover;
  }
`

export default Page