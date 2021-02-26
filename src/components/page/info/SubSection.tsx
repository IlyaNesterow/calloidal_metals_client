import React from 'react'
import { useSelector } from 'react-redux'

import Container from '../../../styles/subSection'
import Element from '../../../styles/argument'
import { getThemeInfo } from '../../../redux/selectors'

import { SubSection } from '../../../types/index'

interface Props extends SubSection{
  current: boolean
}

const Section: React.FC<Props> = ({ current, _arguments, title, text, sectionName, ...props }) => {
  const { theme } = useSelector(getThemeInfo) 

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
          darkTheme={ theme }
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
      darkTheme={ theme } 
      current={ current }
      id="sub-section"
      borderBottomForH2={ text === undefined }
    >
      <h2>{ title }</h2>
      { text && <p>{ text }</p> }
      {_arguments.length > 0 && getArguments()}
    </Container>
  )
}

export default Section