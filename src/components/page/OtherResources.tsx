import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../redux/selectors'
import Container from '../../styles/otherResources'


const OtherResources: React.FC<any> = () => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      darkTheme={ theme }
    >

    </Container>
  )
}

export default OtherResources