import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/howProduced'

import { HowProduced } from '../../../types/index'

interface Props {
  content: HowProduced
  current: boolean
}

const HowProducedComponent: React.FC<Props> = ({ content, current }) => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      bgImage={ content.bgImage }
      darkTheme={ theme } 
      current={ current }
      id="synthesys"
    >
      <div>
        <h2>{ content.sectionName }</h2>
        <p>{ content.text }</p>
      </div>
    </Container>
  )
}

export default HowProducedComponent