import styled from 'styled-components'


interface Props {
  darkTheme: boolean
  transformX: number
}

const Container = styled.div<Props>`
  overflow: hidden;
  min-height: 550px;
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
    left: 0;
    top: 0; 
    width: 100%; 
    height: 100%;
  }
`

export default Container