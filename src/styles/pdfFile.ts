import styled from 'styled-components'

interface Props{
  current: boolean
  darkTheme: boolean
}

const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
`

export default Container