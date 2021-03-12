import React, { useState, useEffect } from 'react'

import { Pages } from '../../types'
import Container from '../../styles/page'
import { CurrentPage } from '../../helpers/contexts'

import IntroductionComponent from './introduction'
import InfoComponent from './info'
import HowProducedComponent from './production'
import SellersComponent from './sellers'
import OtherResourcesComponent from './other'
import Nav from './Nav' 

import { Page, Content, Introduction, Info, HowProduced, Sellers, OtherSources } from '../../types/index'

interface Props {
  page: string,
  content: Content
}

const Main: React.FC<Props> = ({ page, content }) => {
  const [ current, setCurrent ] = useState<number>(0)
 
  useEffect(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    document.title += ` ${ page }`
    return () => {
      const oldTitle = document.title.split(' ')
      document.title = oldTitle.splice(oldTitle.length - 2).join(' ')
    }
  }, [ page ])

  useEffect(() => {
    const handleScroll = () => {
      window.innerWidth > 650
        ? setCurrent(Math.floor(window.pageYOffset / window.innerHeight))
        : setCurrent(Math.floor(window.pageYOffset / 550))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  type GetPageFunc = (obj: Content) => Page | undefined
  type GetSectionNames = (obj: Page) => string[]

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

  const getSectionNames: GetSectionNames = (obj) => Object.values(obj).map(p => p.sectionName)
  
  if(!Pages.some(p => p === page)) return null

  return(
    <Container>
      <CurrentPage.Provider value={ page }>
        <IntroductionComponent 
          content={ getPage(content as Content)?.introduction as Introduction }/>
        <InfoComponent
          content={ getPage(content as Content)?.information as Info }/>
        {getPage(content as Content)?.synthesys &&
          <HowProducedComponent
            content={ getPage(content as Content)?.synthesys as HowProduced }/>
        }
        <SellersComponent
          content={ getPage(content as Content)?.sellers as Sellers }/> 
        {getPage(content as Content)?.other &&
          <OtherResourcesComponent
            content={ getPage(content as Content)?.other as OtherSources }/>
        }
        <Nav
          current={ current }
          setCurrent={ setCurrent }
          links={ getSectionNames(getPage(content as Content) as Page) }
        />
      </CurrentPage.Provider>
    </Container>
  )
}

export default React.memo(Main)