import styled from 'styled-components'

interface Props{
  current: boolean
  darkTheme: boolean
}

const Container = styled.div<Props>`
  padding: 1rem;
  transition: opacity .5s;
  opacity: ${ props => props.current ? 1 : 0 };

  h3{
    margin: 2rem;
    margin-bottom: 1rem;
    width: 70%;
    font-size: 1.5rem;
    color: #${ props => props.darkTheme ? 'eee' : '333' };
  }
  a{
    text-align: right;
    margin-right: 5%;
    margin-top: 1rem;
    font-size: 1.3rem;
  }
  iframe{
    border: none;
    width: 90%;
    margin-left: 5%;
    height: 70%;
  }
  @media only screen and (max-width: 1000px){
    h3{
      margin: 1rem;
      margin-left: 1%;
      width: 99%;
      font-size: 1.1rem;
      color: #${ props => props.darkTheme ? 'eee' : '333' };
    }
    a{
      margin-top: .7rem;
      font-size: 1rem;
    }
    iframe{
      width: 98%;
      height: 65%;
      margin-left: 1%;
    }
  }
`

export default Container