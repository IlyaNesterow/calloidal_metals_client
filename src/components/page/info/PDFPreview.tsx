import React from 'react'
import { isMobile } from 'react-device-detect'


const Preview: React.FC<{ url: string }> = ({ url }) => {
  if(isMobile) return null

  return (
    <iframe 
      src={ url } 
      title="pdf-preview"
      allowFullScreen
    />
  )
}

export default Preview