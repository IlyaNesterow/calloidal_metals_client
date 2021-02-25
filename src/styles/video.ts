import styled from 'styled-components'

interface Props {
  current: number
  num: number
  darkTheme: boolean
}

const Container = styled.div<Props>`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: opacity .7s;
  opacity: ${ props => props.current === props.num ? '1' : '0' };
  height: 100vh;
  min-width: 100vw;

  h3{
    text-align: center;
    font-size: 1.8rem;
    transition: margin-top .7s;
    margin-top: ${ props => props.current === props.num ? '0' : '5%' };
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    color: ${ props => props.darkTheme ? '#eef' : '#223' };
  }
  iframe{
    width: 80%;
    height: 75%;
    border: none;
    box-shadow: 0 0 .5rem .1rem ${ props => props.darkTheme ? '#fff' : '#222' };
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
`

export default Container