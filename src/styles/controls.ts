import styled from 'styled-components'
import { PropsWithTheme } from '../types/styles'

interface Props extends PropsWithTheme{
  amount: number
}

const Container = styled.div<Props>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: -.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  .bar-container{
    width: 2rem; height: 1rem;
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }  
  .bar{
    width: 90%; height: .1rem;
    border-radius: .1rem;
    background-color: ${ props => props.darkTheme ? '#fff' : '#222' };
    transition: background-color .5s;
    margin-top: .5rem;
    display: block;
  }
  span#current{ 
    background-color: #3355ff;
  } 
`

export default Container