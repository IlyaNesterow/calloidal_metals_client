import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect' 
import { useSelector } from 'react-redux'

import { Pages } from '../../types'
import Container from '../../styles/page'
import { getThemeInfo } from '../../redux/selectors'
import { CurrentPage } from '../../helpers/contexts'

import IntroductionComponent from './introduction'
import InfoComponent from './info'
import HowProducedComponent from './production'
import SellersComponent from './sellers'
import OtherResourcesComponent from './other'

import { PageContent } from '../../helpers/contexts'
import { Page, Content, Introduction, Info, HowProduced, Sellers, OtherSources } from '../../types/index'


interface Props {
  page: string
  maxSlides: number
}

const Main: React.FC<Props> = ({ page, maxSlides }) => {
  const { theme } = useSelector(getThemeInfo)  

  const [ height, setHeight ] = useState<number>(window.innerHeight)
  const [ current, setCurrent ] = useState<number>(0)
  const [ transformY, setTransformY ] = useState<number>(height * current)

  useEffect(() => {
    const resetHeight: () => void = () => setHeight(window.innerHeight)
    if(!isMobile){
      document.addEventListener('keydown', handlePageChangeByClicking)
    }
    window.addEventListener('resize', resetHeight)
    return () => {
      window.removeEventListener('resize', resetHeight)
      if(!isMobile){
        document.removeEventListener('keydown', handlePageChangeByClicking)
      }
    }
  })

  useEffect(() => {
    setTransformY(current * height * -1)
  }, [ current, height ])

  const handlePageChangeByClicking: any = (e: React.KeyboardEvent) => {
    if(e.keyCode === 38){
      if(current > 0)
        setCurrent(current - 1)
    } else if (e.keyCode === 40){
      if(current < maxSlides - 1)
        setCurrent(current + 1)
    }
  } 

  type GetPageFunc = (obj: Content) => Page | undefined

  const getPage: GetPageFunc = (obj) => {
    const { silver, gold, platinum, copper } = obj.pages
    switch(page){
      case 'silver': 
        return silver
      case 'gold':
        return gold
      case 'platinum':
        return platinum
      case 'copper':
        return copper
    }
  }

  if(!Pages.some(p => p === page)) return null

  return(
    <PageContent.Consumer>
      {content => 
        <Container 
          darkTheme={ theme }
          transformY={ transformY }
          isMobile={ isMobile }
        >
          <CurrentPage.Provider value={ page }>
            <IntroductionComponent 
              content={ getPage(content as Content)?.introduction as Introduction }/>
            <InfoComponent
              content={ getPage(content as Content)?.info as Info }/>
            {getPage(content as Content)?.howProduced &&
              <HowProducedComponent
                current={ true }
                content={ getPage(content as Content)?.howProduced as HowProduced }/>
            }
            <SellersComponent
              content={ getPage(content as Content)?.sellers as Sellers }/> 
            {getPage(content as Content)?.otherSources &&
              <OtherResourcesComponent
                current={ true }
                content={ getPage(content as Content)?.otherSources as OtherSources }/>
            }
          </CurrentPage.Provider>
        </Container>
      }
    </PageContent.Consumer>
  )
}

export default React.memo(Main)