import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getTheme } from '../redux/selectors'
import { setDefaultTheme, setRememberMe, logout } from '../redux/actions'
import Global from '../styles/global'
import { setDefaults } from '../helpers/localStorage'


const App: React.FC = () => {
  const theme = useSelector(getTheme)
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
    </div>
  )
}

export default App
