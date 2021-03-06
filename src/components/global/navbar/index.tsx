import React from 'react'
import { useSelector } from 'react-redux'

import MenuToggler from './MenuToggler'
import Container from '../../../styles/navbar'
import { getAppInfo } from '../../../redux/selectors'


const Navbar: React.FC = () => {
  const { menuOpened, theme } = useSelector(getAppInfo)

  return(
    <Container
      darkTheme={ theme }
      opened={ menuOpened }
    >
      <MenuToggler/>
    </Container>
  )
}

export default React.memo(Navbar)