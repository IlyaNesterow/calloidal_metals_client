import styled from 'styled-components'
import { PropsWithTransformX } from '../types/styles'


const Container = styled.div<PropsWithTransformX>`
  overflow: hidden;

  #ribbon{
    transform: translateX(-${ props => props.transformX }px);
  }
`

export default Container