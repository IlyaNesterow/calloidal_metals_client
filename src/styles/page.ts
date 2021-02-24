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
    min-height: 550px;
    position: relative;
  }
  .page-with-bg-img::before {
    content: "";
    position: absolute;
    background-size: cover;
  }
  @media only screen and (max-width: 1000px){
    .page-with-bg-img{
      min-height: 450px;
    }
  }
`

export default Page