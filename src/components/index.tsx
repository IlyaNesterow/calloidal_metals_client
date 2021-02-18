import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getThemeInfo } from '../redux/selectors'
import { setDefaultTheme, setRememberMe, logout } from '../redux/actions'
import Global from '../styles/global'
import { setDefaults } from '../helpers/localStorage'
import Router from '../router'


const App: React.FC = () => {
  const { theme } = useSelector(getThemeInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('storage', storageObesrver)
    return () => {
      window.removeEventListener('storage', storageObesrver)
    }
  })

  const storageObesrver = (e: StorageEvent): void => {
    !e.key && _setDefaults()
  }

  const _setDefaults = (): void => {
    setDefaults()
    dispatch(setDefaultTheme(false))
    dispatch(setRememberMe(false))
    dispatch(logout())
  }

  return (
    <div>
      <Global darkTheme={ theme }/>
      <Router/>
    </div>
  )
}

export default App