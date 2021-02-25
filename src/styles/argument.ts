import styled from 'styled-components'

interface Props{
  darkTheme: boolean
  bold: boolean | undefined
  current: boolean
}

const Element = styled.li<Props>`
  color: #${ props => props.darkTheme ? 'ddf' : '113' };
  font-weight: ${ props => props.bold ? '700' : '100' };
  margin: 1rem;
  list-style: none;
  font-size: 1.1rem;
  font-family: ${ props => props.bold ? "'Open Sans', sans-serif" : "Roboto, sans-serif" };
  transition: opacity .8s;
  opacity: ${ props => props.current ? '1' : '0' };
`

export default Element