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

  const createBtns: CreateBtns = () => {
    const items = []
    for(let i = 0; i < amount; i++){
      const item = (
        <div 
          key={ i }
          onClick={() => onClick(i)}
        >
          <span 
            className="bar"
            id={current === i ? 'current' : ''}
          ></span>
        </div>
      )
      items.push(item)
    }
    return items
  }
  
  return(
    <Container 
      darkTheme={ theme } 
      amount={ 2 }
    >
      { createBtns() }
    </Container>
  )
}

export default Control