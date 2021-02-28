import React from 'react'


const Preview: React.FC<{ url: string }> = ({ url }) => (
  <iframe 
    src={ url } 
    title="pdf-preview"
    allowFullScreen
  />
)


export default Preview