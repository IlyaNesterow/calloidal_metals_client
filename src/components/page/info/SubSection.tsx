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
      {_arguments.length > 0 &&
        _arguments.map((arg, i) => (
          <Element
            current={ current }
            bold={ arg.bold }
            darkTheme={ theme }
            key={ arg.statement + i }
          >
            { arg.statement }
          </Element>
        ))
      }
    </Container>
  )
}

export default Section