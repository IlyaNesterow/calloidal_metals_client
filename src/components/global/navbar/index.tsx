import React from 'react'
import { useSelector } from 'react-redux'

import MenuToggler from './MenuToggler'
import AuthCtx from '../AuthCtx'
import Container from '../../../styles/navbar'
import { getAppInfo, getThemeInfo } from '../../../redux/selectors'


const Navbar: React.FC = () => {
  const { menuOpened } = useSelector(getAppInfo)
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container
      darkTheme={ theme }
      opened={ menuOpened }
    >
      <AuthCtx/>
      <MenuToggler/>
    </Container>
  )
}

export default Navbar