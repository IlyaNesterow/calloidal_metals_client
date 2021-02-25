import styled from 'styled-components'


interface Props {
  darkTheme: boolean
  transformX: number
}

const Container = styled.div<Props>`
  overflow: hidden;
  min-height: 650px;
  position: relative;

  #ribbon{
    transform: translateX(-${ props => props.transformX }px);
  }
  #first-slide, #sub-section, #pdf-file{
    position: relative;
  }
  #first-slide::before, 
  #sub-section::before {
    content: "";
    position: absolute;
    background-size: cover;
    z-index: -1;
    left: 1px; top: 1px; 
    width: calc(100% - 2px);  height: calc(100% - 2px);
  }
`

export default Container