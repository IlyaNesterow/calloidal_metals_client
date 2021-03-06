import React from 'react'

import Container from '../../../styles/subSection'
import Element from '../../../styles/argument'

import { SubSection } from '../../../types/index'

interface Props extends SubSection{
  current: boolean
}

const Section: React.FC<Props> = ({ current, _arguments, title, text, sectionName, ...props }) => {
  type GetArgsFunc = () => JSX.Element[]

  const getArguments: GetArgsFunc = () => {
    let lim: number
    window.innerWidth < 1000 || window.innerHeight < 500
      ? lim = 2
      : lim = _arguments.length
    const output = []
    for(let i = 0; i < lim; i++){
      const elem = (
        <Element
          current={ current }
          bold={ _arguments[i].bold }
          id="sub-section-element"
          key={ _arguments[i].statement + i }
        >
          { _arguments[i].statement }
        </Element>
      )
      output.push(elem)
    }
    return output
  }
  
  return(
    <Container 
      { ...props }
      current={ current }
      id="sub-section"
      borderBottomForH2={ text === undefined }
    >
      <div>
        <h2>{ title }</h2>
        { text && <p>{ text }</p> }
        {_arguments.length > 0 && getArguments()}
      </div>
    </Container>
  )
}

export default React.memo(Section)