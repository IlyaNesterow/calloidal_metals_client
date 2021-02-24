import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../redux/selectors'
import Container from '../../styles/info'

import { Info } from '../../types/index'

interface Props {
  content: Info
}

const InfoComponent: React.FC<Props> = ({ content }) => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      bgImage={ content.bgImage }
      bgImageWidth={ content.bgImageWidth }
      bgImageHeight={ content.bgImageHeight }
      className="page-with-bg-img"
      darkTheme={ theme }
    >

    </Container>
  )
}

export default InfoComponent