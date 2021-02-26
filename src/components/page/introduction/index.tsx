import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
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
  const { theme } = useSelector(getThemeInfo)
  
  const { setCurrentX, transformX, currentX } = useTransforms(true)

  const currentForStyle = useDelay(currentX, 300)
 
  const handleControlClick: HandleControlBarClick = (num) => setCurrentX(num)
  
  return(
    <Container 
      darkTheme={ theme }
      bgImage={ content.bgImage }
      transformX={ transformX }
      current={ currentForStyle }
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
              num={ i + 1 }
              current={ currentForStyle }
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


export default IntroductionComponent