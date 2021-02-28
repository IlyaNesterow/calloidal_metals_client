import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'

import Container from '../../styles/nav'
import { getThemeInfo } from '../../redux/selectors'

import { DivOnClick } from '../../types/functions'

interface Props{
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  links: string[]
  current: number
}

const Nav: React.FC<Props> = ({ links, setCurrent, current }) => {
  const { theme } = useSelector(getThemeInfo)
  const [ height, setHeight ] = useState<number>(window.innerHeight)

  useEffect(() => {
    const resetHeight: () => void = () => setHeight(window.innerHeight)
    window.addEventListener('resize', resetHeight)
    return () => window.removeEventListener('resize', resetHeight)
  })

  if(isMobile && window.innerWidth < 800) return null

  return(
    <Container darkTheme={ theme }>
      <div>
        { links.map((l, i) => (
            <Link 
              key={ l }
              content={ l }
              current={ current === i }
              onClick={() => {
                setCurrent(i)
                window.scroll({
                  top: height * i, 
                  left: 0, 
                  behavior: 'smooth' 
                });
              }}
            />
          ))
        }
      </div>
    </Container>
  )
}

interface PropsForLink{
  onClick: DivOnClick
  content: string
  current: boolean
}

const Link: React.FC<PropsForLink> = ({ onClick, content, current }) => (
  <div 
    id="section-link"
    className={ current ? 'current' : 'invisible' }
    onClick={ onClick }
  >
    <p className="no-select">{ content.toUpperCase() }</p>
  </div>
)

export default Nav