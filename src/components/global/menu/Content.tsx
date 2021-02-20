import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Container from '../../../styles/menu-content'
import { getAppInfo, getThemeInfo } from '../../../redux/selectors'
import { setMenuOpened } from '../../../redux/actions'
import { Navlink, NavLinkGenerator } from './types'
import { links } from './navlinks'
import ExtraLinks from './ExtraNavlinks'


const Content: React.FC = () => {
  const { menuOpened } = useSelector(getAppInfo)
  const { theme } = useSelector(getThemeInfo)

  const dispatch = useDispatch()
   
  const [ rollDown, setRollDown ] = useState<boolean>(false) 

  useEffect(() => {
    menuOpened
      ? setTimeout(() => setRollDown(true), 150)
      : setRollDown(false)
  }, [ menuOpened ])

  const generateNavLinks: NavLinkGenerator = (links: Navlink[]) => 
    <>
      {
        links.map(link => 
          <NavLink
            to={ link.url.startsWith('/') ? link.url : `/${link.url}` }
            className="menu-link"
            onClick={() => dispatch(setMenuOpened(false))}
            key={ link.label }
          >
            { link.label.toUpperCase() }
          </NavLink>
        )
      }
    </>

  return(
    <Container 
      opened={ menuOpened }
      rollDown={ rollDown }
      darkTheme={ theme }
    >
      <div id="inner-container">
        { generateNavLinks(links) }
        <ExtraLinks/>
      </div>
    </Container>
  )
}

export default Content