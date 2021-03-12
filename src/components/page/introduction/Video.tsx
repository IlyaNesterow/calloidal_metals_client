import React from 'react'

import { Link } from '../../../types'
import Container from '../../../styles/video'

interface Props extends Link{
  current: boolean
}

const Video: React.FC<Props> = ({ url, _name, ...props }) => (
  <Container 
    id="video" 
    { ...props }
  >
    <h3>{ _name }</h3>
    <iframe 
      title={ _name } 
      src={ url } 
    />
  </Container>
)


export default React.memo(Video)