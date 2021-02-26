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
    min-height: 550px;
    display: flex;
    transition: transform .4s ease-in;
  } 
  h2{
    letter-spacing: .1rem;
  }
  @media only screen and (max-width: 1000px){
    #ribbon{
      min-height: 450px !important;
    }
  }
`

export default Page