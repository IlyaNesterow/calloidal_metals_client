import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getThemeInfo } from '../redux/selectors'
import { setDefaultTheme, setRememberMe, logout, setError } from '../redux/actions'
import Global from '../styles/global'
import { setDefaults } from '../helpers/localStorage'
import Router from '../router'
import ErrorMessage from './global/ErrorMessage'
import { PageContent } from '../helpers/contexts'

import { Content } from '../types/index'


const App: React.FC = () => {
  const { theme } = useSelector(getThemeInfo)
  const [ content, setContent ] = useState<Content | null>(null)
  const [ emptyBox, setEmptyBox ] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('storage', storageObesrver)
    return () => {
      window.removeEventListener('storage', storageObesrver)
    }
  })

  useEffect(() => {
    fetch('https://calloid-metals-content-temporary.s3.eu-west-2.amazonaws.com/data.json')
    .then(res => {
      if(res.ok) return res.json()
      else throw new Error()
    })
    .then((res: Content) => {
      console.log(res)
      setContent(res)
      setEmptyBox(false)
    })  
    .catch((err: Error) => {
      console.log(err)
      dispatch(setError('Failed to fetch content'))
    })
  }, [ dispatch ])

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
      <ErrorMessage/>
      { !emptyBox && content &&
        <PageContent.Provider value={ content }>
          <Router/> 
        </PageContent.Provider>
      }
    </div>
  )
}

export default App