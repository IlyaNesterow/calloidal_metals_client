import React from 'react'

import { VideoContent } from '../../../types'


const Video: React.FC<VideoContent> = ({ url, description }) => {
  return(
    <div id="video">
      <h3>{ description }</h3>
      <iframe 
        title={ description } 
        src={ url } 
      />
    </div>
  )
}

export default Video