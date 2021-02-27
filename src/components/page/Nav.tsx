import React from 'react'
import { useSelector } from 'react-redux'

import Container from '../../styles/nav'
import { getThemeInfo } from '../../redux/selectors'

const Nav: React.FC<any> = () => {
  const { theme } = useSelector(getThemeInfo)

  return(
    <Container darkTheme={ theme }>

    </Container>
  )
}

export default Nav