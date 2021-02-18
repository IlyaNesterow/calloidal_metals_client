import React from 'react'
import { useSelector } from 'react-redux'

import { getAppInfo, getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/menu'


const Menu: React.FC = () => {
  const { menuOpened } = useSelector(getAppInfo)
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      opened={ menuOpened }
      darkTheme={ theme }
    >
      <div id="tab"></div>
      <div id="shadow"></div>
    </Container>
  )
}

export default Menu