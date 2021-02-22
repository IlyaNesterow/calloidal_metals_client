import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../redux/selectors'
import Container from '../../styles/introduction'


const Introduction: React.FC<any> = () => {
  const { theme } = useSelector(getThemeInfo)
  
  return(
    <Container 
      darkTheme={ theme }
      bgImage="https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"
    >
  
    </Container>
  )
}

export default Introduction