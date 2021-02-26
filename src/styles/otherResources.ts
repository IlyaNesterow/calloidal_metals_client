import styled from 'styled-components'


interface Props {
  darkTheme: boolean
  current: boolean
}

const Container = styled.div<Props>`
  padding: 2%;

  h2{
    margin-top: 10%;
    padding-bottom: .5rem;
    border-bottom: solid 1px #88888888;
    color: #${ props => props.darkTheme ? 'fff' : '111' };
  }
  a{
    opacity: ${ props => props.current ? 1 : 0 };
  }
  #links{
    margin-top: 2rem;
  }
  @media only screen and (max-width: 1000px){
    padding: 3%;
    h2{
      margin-top: 9%;
    }
  }
`

export default Container