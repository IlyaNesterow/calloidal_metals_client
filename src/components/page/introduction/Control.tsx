import React from 'react'

interface Props {
  onClick: (clickOnVideo: number) => void
  current: number
}

const Control: React.FC<Props> = ({ onClick, current }) => {
  const createLinks = () => {
    return [0, 1].map(el => 
      <div 
        key={ el }
        onClick={() => onClick(el)}
      >
        <span 
          className="bar"
          id={current === el ? 'current' : ''}
        ></span>
      </div>
    )
  }

  return(
    <div id="intro-nav">
      { createLinks() }
    </div>
  )
}

export default Control