import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

import { getAuthInfo } from '../../redux/selectors'
import { logout, setMenuOpened } from '../../redux/actions'
import { handleLogout } from '../../helpers/localStorage'


const AuthCtx: React.FC = () => {
  const { loggedIn } = useSelector(getAuthInfo)

  const dispatch = useDispatch()

  if(window.location.pathname === '/login') return null

  const _handleLogout = (): void => {
    dispatch(logout)
    handleLogout()
  }

  return loggedIn
    ? <span
        className="menu-link"
        onClick={ _handleLogout }
        id="auth-ctx"
      >
        <Redirect
          to="/silver"
        >
          LOG OUT
        </Redirect>
      </span>
    : <NavLink 
        to="/login"
        className="menu-link"
        id="auth-ctx"
        onClick={() => dispatch(setMenuOpened(false)) }
      >
        LOG IN
      </NavLink>
}

export default AuthCtx