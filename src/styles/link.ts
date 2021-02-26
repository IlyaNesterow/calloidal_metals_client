import styled from 'styled-components'

interface Props {
  num: number
  darkTheme: boolean
  sameAlign: boolean
}

const Link = styled.a<Props>`
  transition: opacity ${ props => props.num * 0.4 };
  text-align: ${ props => (props.sameAlign ? 'left' : props.num % 2 === 0 ? 'left' : 'right') };
  display: block;
  margin: 1rem 0;
  font-size: 1.3rem;
  color: #${ props => props.darkTheme ? 'fff' : '111' };

  @media only screen and (max-width: 1000px){
    font-size: 1.1rem;
    color: #${ props => props.darkTheme ? 'fff' : '111' };
  }
`

export default Link