import React from 'react'

import { VideoContent } from '../../../types'
import Container from '../../../styles/video'

interface Props extends VideoContent{
  current: boolean
}

const Video: React.FC<Props> = ({ url, description, ...props }) => (
  <Container 
    id="video" 
    { ...props }
  >
    <h3>{ description }</h3>
    <iframe 
      title={ description } 
      src={ url } 
    />
  </Container>
)


export default React.memo(Video)