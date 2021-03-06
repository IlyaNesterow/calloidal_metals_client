import styled from 'styled-components'


const Page = styled.div`
  width: 100vw;
  height: auto;

  #ribbon{
    width: auto;
    height: 100vh;
    display: flex;
    transition: transform .4s ease-in;
  } 
  h2{
    letter-spacing: .1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
  p{
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }
  a{
    font-size: 1.3rem;
  }
  #first-slide,  
  #sub-section,
  #intro,
  #synthesys,
  #sellers, 
  #pdf-file,
  #ribbon, 
  #video,
  #info,
  #introduction{
    min-height: 550px;
    position: relative;
  }
  #intro,
  #video,
  #other,
  #pdf-file, 
  #synthesys{
    height: 100vh;
    min-width: 100vw;
  }
  #sellers div,
  #other div{
    height: auto;
    width: 100%;
  }
  #first-slide,
  #synthesys, 
  #sellers,
  #intro,
  #sub-section,
  #other{
    display: flex;
    align-items: center;
  }
  #first-slide::before,  
  #sub-section::before,
  #intro::before,
  #synthesys::before,
  #sellers::before {
    content: "";
    position: absolute;
    background-size: cover;
    z-index: -1;
    left: 0; top: 0; 
    width: 100%;  height: 100%;
  }
  @media only screen and (max-width: 1000px){
    p{
      font-size: 1.2rem;
    }
    a{
      font-size: 1.1rem;
    }
    #first-slide,  
    #sub-section,
    #intro,
    #synthesys,
    #sellers, 
    #ribbon,
    #video{
      min-height: 550px;
    }
  } 
  @media only screen and (max-width: 500px){
    #first-slide,
    #synthesys{
      margin: 0;
      min-width: 100vw;
      height: 100vh;
      padding: 2%;
      p{
        width: 95%;
        margin: .5rem;
      }
      h2{
        text-align: left;
        margin: .5rem;
        font-size: 1.5rem;
      } 
    }
  }
  @supports (-webkit-touch-callout: none) {
    #first-slide,  
    #sub-section,
    #intro,
    #synthesys,
    #sellers, 
    #pdf-file,
    #ribbon, 
    #video,
    #info,
    #introduction{
      height: 90vh;
    }
    h2{
      font-weight: 400;
      font-family: 'Rubik', sans-serif;
    }
    h3, a, li{
      font-weight: 300;
      font-family: 'Nunito', sans-serif;
    }
    p{
      font-weight: 400;
      font-family: 'Raleway', sans-serif;
    }
  }
`

export default Page