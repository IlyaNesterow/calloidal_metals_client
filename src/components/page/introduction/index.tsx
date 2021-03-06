import React from 'react'

import Container from '../../../styles/introduction'
import Intro from './Intro'
import Video from './Video'
import Control from '../Control'

import { Introduction } from '../../../types'
import { HandleControlBarClick } from '../../../types/functions'
import { useTransforms, useDelay } from '../../../helpers/hooks'

interface Props {
  content: Introduction
}

const IntroductionComponent: React.FC<Props> = ({ content }) => {
  
  const { setCurrentX, transformX, currentX } = useTransforms(true)

  const currentForStyle = useDelay(currentX, 300)
  
  const handleControlClick: HandleControlBarClick = (num) => setCurrentX(num)
  
  return(
    <Container 
      bgImage={ content.bgImage }
      transformX={ transformX }
      current={ currentForStyle === 0 }
      id="introduction"
    >
      <div id="ribbon"> 
        <Intro
          title={ content.title as string }
          text={ content.text }
        />
        {content.videos && content.videos.length > 0 &&
          content.videos.map((v, i) => (
            <Video 
              key={ v.url } 
              { ...v } 
              current={ (currentForStyle === i + 1) }
            />
          ))
        }
      </div>
      {content.videos && content.videos.length > 0 &&
        <Control 
          amount={ 1 + content.videos.length }
          current={ currentX }
          onClick={ handleControlClick }
        />
      }
    </Container>
  )
}


export default React.memo(IntroductionComponent)