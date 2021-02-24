import React from 'react'
import { useSelector } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import Container from '../../../styles/introduction'
import Intro from './Intro'
import Video from './Video'
import Control from './Control'

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
    >
      <div id="intro-ribbon">
        <Intro
          title={ content.title as string }
          text={ content.text }
        />
        {content.video && 
          <Video { ...content.video }/>
        }
      </div>
      {content.video && 
        <Control 
          current={ currentX }
          onClick={ handleControlClick }
        />
      }
    </Container>
  )
}


export default IntroductionComponent