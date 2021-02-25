import styled from 'styled-components'

interface Props {
  amount: number
  darkTheme: boolean
}

const Container = styled.div<Props>`
  position: absolute;
  bottom: 1rem;
  left: calc(50% - ${ props => props.amount / 2 }rem);
  display: flex;
  width: ${ props => props.amount * 1.5 }rem;
  z-index: 1;
  
  div{ 
    width: 1.2rem;
    padding: 1rem .2rem;
    height: 1rem;
    display: flex;
    align-items: center;
  }
  .bar{
    width: 1rem;
    height: .1rem;
    border-radius: 1rem;
    display: block;
    transition: all .3s;
    background-color: ${ props => props.darkTheme ? '#eee' : '#222' };
  }
  #current{
    background-color: #3355ff;
  }
`

export default Container