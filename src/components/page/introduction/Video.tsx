import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import { VideoContent } from '../../../types'
import Container from '../../../styles/video'

interface Props extends VideoContent{
  current: boolean
}

const Video: React.FC<Props> = ({ url, description, ...props }) => {
  const { theme } = useSelector(getThemeInfo)
  
  return(
    <Container 
      id="video" 
      darkTheme={ theme }
      { ...props }
    >
      <h3>{ description }</h3>
      <iframe 
        title={ description } 
        src={ url } 
      />
    </Container>
  )
}

export default Video