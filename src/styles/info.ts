import styled from 'styled-components'


interface Props {
  darkTheme: boolean
  transformX: number
}

const Container = styled.div<Props>`
  overflow: hidden;
  position: relative;

  #ribbon{
    transform: translateX(-${ props => props.transformX }px);
  }
  #first-slide, #sub-section, #pdf-file{
    position: relative;
  }
`

export default Container