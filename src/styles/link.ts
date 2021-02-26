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
`

export default Link