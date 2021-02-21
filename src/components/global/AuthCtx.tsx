import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'

import { getAuthInfo } from '../../redux/selectors'
import { logout, setMenuOpened } from '../../redux/actions'
import { handleLogout } from '../../helpers/localStorage'


const AuthCtx: React.FC = () => {
  const { loggedIn } = useSelector(getAuthInfo)

  const dispatch = useDispatch()

  const history = useHistory()

  if(window.location.pathname === '/login') return null

  const _handleLogout = (): void => {
    dispatch(logout())
    handleLogout()
    history.push('/silver')
  }

  return loggedIn
    ? <div
        className="menu-link"
        onClick={ _handleLogout }
        id="auth-ctx"
      >
        LOG OUT
      </div>
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