import React from 'react'

import Container from '../../styles/controls'


interface Props {
  onClick: (clickOnItem: number) => void
  current: number
  amount: number
}

const Control: React.FC<Props> = ({ onClick, current, amount }) => {
  type CreateBtns = () => JSX.Element[]  

  const createBars: CreateBtns = () => {
    const bars = []
    for(let i = 0; i < amount; i++){
      const bar = (
        <div 
          className="bar-container"
          onClick={() => onClick(i)}
          key={ i }
        >
          <span 
            id={ current === i ? 'current' : '' }
            className="bar" 
          >
          </span>
        </div>
      )
      bars.push(bar)
    }

    return bars
  } 
  
  return(
    <Container amount={ 2 }>
      { createBars() }
    </Container>
  )
}

export default React.memo(Control)