import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../redux/selectors'
import Container from '../../styles/controls'


interface Props {
  onClick: (clickOnVideo: number) => void
  current: number
  amount: number
}

const Control: React.FC<Props> = ({ onClick, current, amount }) => {
  const { theme } = useSelector(getThemeInfo)
  
  type CreateBtns = () => JSX.Element[]  

  const createBars: CreateBtns = () => {
    const bars = []
    for(let i = 0; i < amount; i++){
      const bar = (
        <div 
          className="bar-container"
          onClick={() => onClick(i)}
        >
          <span 
            id={ current === i ? 'current' : '' }
            className="bar" 
            key={ i }
          >
          </span>
        </div>
      )
      bars.push(bar)
    }

    return bars
  } 
  
  return(
    <Container 
      darkTheme={ theme } 
      amount={ 2 }
    >
      { createBars() }
    </Container>
  )
}

export default Control