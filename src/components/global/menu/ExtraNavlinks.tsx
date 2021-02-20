import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getThemeInfo, getAuthInfo } from '../../../redux/selectors'
import { toggleTheme, setMenuOpened } from '../../../redux/actions'
import { NavLinkCtx } from './types'
import { toggleSmth } from '../../../helpers/localStorage'
import AuthCtx from '../AuthCtx'


const ExtraNavLinks: React.FC = () => {
  const { theme } = useSelector(getThemeInfo)
  const { loggedIn } = useSelector(getAuthInfo)

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

  const getAdminCtx = (): any  => 
    loggedIn 
      ? <NavLink
          to="/admin"
          className="menu-link"
          onClick={() => dispatch(setMenuOpened(false))}
          activeStyle={{
            color: '#888',
          }}
        >
          MODIFY CONTENT
        </NavLink>
      : null
  
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
      { getAdminCtx() }
      <AuthCtx/>
    </>
  )
}

export default ExtraNavLinks