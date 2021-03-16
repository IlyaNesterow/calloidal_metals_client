import React from 'react'
import { Helmet } from 'react-helmet'

import { Link } from '../../../types'
import Container from '../../../styles/video'

interface Props extends Link{
  current: boolean
}

const Video: React.FC<Props> = ({ url, _name, ...props }) => {
  const generateHelmet: (() => JSX.Element) = () => (
    <Helmet>
      <meta property="og:video" content={ _name } />
      <meta property="og:video:secure_url" content={ url } />
    </Helmet>
  )

  return(
    <Container 
      id="video" 
      { ...props }
    >
      { generateHelmet() }
      <h3>{ _name }</h3>
      <iframe 
        title={ _name } 
        src={ url } 
      />
    </Container>
  )
}


export default React.memo(Video)