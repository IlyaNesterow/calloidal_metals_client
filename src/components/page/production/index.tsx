import React from 'react'
import { useSelector } from 'react-redux'

import { getAppInfo } from '../../../redux/selectors'
import Container from '../../../styles/howProduced'
import { useInViewWithDelay } from '../../../helpers/hooks'

import { HowProduced } from '../../../types/index'

interface Props {
  content: HowProduced
}

const HowProducedComponent: React.FC<Props> = ({ content }) => {
  const { theme } = useSelector(getAppInfo)

  const { ref, inView } = useInViewWithDelay(100)

  return(
    <Container
      bgImage={ content.bgImage }
      darkTheme={ theme } 
      current={ inView }
      id="synthesys"
    >
      <div ref={ ref }>
        <h2>{ content.sectionName }</h2>
        <p>{ content.text }</p>
      </div>
    </Container>
  )
}

export default HowProducedComponent