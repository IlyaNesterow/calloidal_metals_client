import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { pages } from '../../types'
import Container from '../../styles/page'
import { CurrentPage } from '../../helpers/contexts'

import IntroductionComponent from './introduction'
import InfoComponent from './info'
import HowProducedComponent from './production'
import SellersComponent from './sellers'
import OtherResourcesComponent from './other'
import Nav from './Nav' 

import * as Types from '../../types/index'

interface Props {
  page: Types.PageName,
  content: Types.Content
}

const Main: React.FC<Props> = ({ page, content }) => {
  const [ current, setCurrent ] = useState<number>(0)
 
  useEffect(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    const handleScroll = () => {
      window.innerWidth > 650
        ? setCurrent(Math.floor(window.pageYOffset / window.innerHeight))
        : setCurrent(Math.floor(window.pageYOffset / 550))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const { information, introduction, sellers, synthesys, other } = content.pages[page]
 
  type GetSectionNames = (obj: Types.Page) => string[]

  const getSectionNames: GetSectionNames = (obj) => Object.values(obj).map(p => p.sectionName)

  const generateHelmet = () => (
    <Helmet>
      <title>{ introduction.title || introduction.sectionName }</title>
      <meta 
        property="og:title" 
        content={ introduction.title || introduction.sectionName }
      />
      <meta property="og:url" content={ window.location.href } />
      <meta property="og:image" content={ introduction.bgImage } />
      <meta property="og:image:secure_url"  content={ introduction.bgImage } />
      <meta property="og:image:type" content={`image/${ introduction.bgImage.split('.').pop() }`} />
      <meta property="og:description" content={ introduction.text }/>
      <meta property="og:image:alt" content={ introduction.text } />
      <meta name="description" content={ introduction.text }/>
      <meta name="twitter:card" content={ introduction.title } />
      <meta name="twitter:title" content={ introduction.title } />
      <meta name="twitter:description" content={ introduction.text } />
      <meta name="twitter:image" content={ introduction.bgImage } />
    </Helmet>
  )
  
  if(!pages.some(p => p === page)) return null

  return(
    <Container>
      <CurrentPage.Provider value={ page }>
        { generateHelmet() }
        <IntroductionComponent 
          content={ introduction }/>
        <InfoComponent
          content={ information }/>
        {synthesys &&
          <HowProducedComponent
            content={ synthesys as Types.HowProduced }/>
        }
        <SellersComponent
          content={ sellers }/> 
        {other &&
          <OtherResourcesComponent
            content={ other as Types.OtherSources }/>
        }
        <Nav
          current={ current }
          setCurrent={ setCurrent }
          links={ getSectionNames(content.pages[page]) }
        />
      </CurrentPage.Provider>
    </Container>
  )
}

export default React.memo(Main)