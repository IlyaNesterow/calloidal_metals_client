import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../redux/selectors'
import Container from '../../styles/introduction'

import { Introduction } from '../../types'

interface Props {
  content: Introduction
}

const IntroductionComponent: React.FC<Props> = ({ content }) => {
  const { theme } = useSelector(getThemeInfo)
  console.log(content)
  return(
    <Container 
      darkTheme={ theme }
      className="page-with-bg-img"
      bgImage={ content.bgImage }
    >
  
    </Container>
  )
}

export default IntroductionComponent