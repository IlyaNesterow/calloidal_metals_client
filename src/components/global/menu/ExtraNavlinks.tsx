import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getThemeInfo } from '../../../redux/selectors'
import { toggleTheme } from '../../../redux/actions'
import { NavLinkCtx } from './types'
import { toggleSmth } from '../../../helpers/localStorage'


const ExtraNavLinks: React.FC = () => {
  const { theme } = useSelector(getThemeInfo)

  const dispatch = useDispatch()

  const getThemeLabel = (): string => {
    let output = ''
    theme
      ? output += 'bright'
      : output += 'dark'
    output += ' '
    return output.toUpperCase()
  }

  const _toggleTheme = (): void => {
    dispatch(toggleTheme())
    toggleSmth('theme')
  }

  const getThemeToggler: NavLinkCtx = () => 
    <span
      className="menu-link no-select"
      onClick={ _toggleTheme }
    >
      { getThemeLabel() }
    </span>
  
  return(
    <>
      { getThemeToggler() }
    </>
  )
}

export default ExtraNavLinks