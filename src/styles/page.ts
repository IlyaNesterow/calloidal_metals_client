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
    width: auto;
    height: 100vh;
    display: flex;
    transition: transform .4s ease-in;
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