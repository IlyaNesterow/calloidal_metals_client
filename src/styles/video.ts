import styled from 'styled-components'
import { PropsWithCurrentBool } from '../types/styles'


const Container = styled.div<PropsWithCurrentBool>`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: opacity .7s;
  opacity: ${ props => props.current ? '1' : '0' };
  height: 100vh;
  min-height: 550px;
  min-width: 100vw;

  h3{
    text-align: center;
    font-size: 1.8rem;
    transition: margin-top .7s;
    margin-top: ${ props => props.current ? '0' : '5%' };
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
  }
  iframe{
    width: 80%;
    height: 75%;
    border: none;
    border-radius: .5rem;
  }

  @media only screen and (max-width: 1000px){
    padding: 1rem;
    padding-top: 5%;
    display: block;

    h3{
      font-size: 1.3rem;
    }
    iframe{
      width: 90%;
      height: 77%;
      margin-left: 5%;
      margin-top: 3%;
      border: none;
      box-shadow: none;
      border-radius: .5rem;
    }
  }
  @media only screen and (max-width: 700px){
    padding-top: 9%;
    
    iframe{
      margin-top: 6%;
    }
  }
  @supports (-webkit-touch-callout: none) {
    iframe{
      height: 60vh;
    }
  }
`

export default Container