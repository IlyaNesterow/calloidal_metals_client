import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { InputOnChange, ButtonOnClick, SpanMouseEvent } from '../../types/functions'
import { setError, login, setLoading } from '../../redux/actions'
import { login as loginInLS } from '../../helpers/localStorage'

import PwField from '../global/PasswordField'
import Info from './Info'
import Button from './Button'


const Form: React.FC<{ label: string }> = ({ label }) => {
  const dispatch = useDispatch()

  const history = useHistory()

  const [ username, setUsername ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ visibleInfo, setVisibleInfo ] = useState<boolean>(false)
  
  const pwOnChange: (val: string) => void = (val) => setPassword(val)

  const usernameOnChange: InputOnChange = (e) => setUsername(e.target.value)

  const handleSubmit: ButtonOnClick = (e) => {
    e.preventDefault()
    dispatch(setLoading(true))
    /*if(username.length < 5) return dispatch(setError('Username is to short'))
    if(password.length < 5) return dispatch(setError('Password does not seem to match'))*/
    setTimeout(() => {
      /*dispatch(login({ username: 'Vasya', session: '43432' }))
      loginInLS(username, 'sdfsdf')
      history.push('/silver')*/
      dispatch(setLoading(false))
    }, 1000)
  }

  const handleClick: SpanMouseEvent = () => {
    if(isMobile)
      setVisibleInfo(!visibleInfo)
  }

  const mouseEnterHandler: SpanMouseEvent = ()  => {
    if(!isMobile)
      setVisibleInfo(true)
  }

  const mouseLeaveHandler: SpanMouseEvent = ()  => {
    if(!isMobile)
      setVisibleInfo(false)
  }

  return(
    <form>
      <p className="no-select">
        Your Username
        <span 
          id="info"
          onClick={ handleClick }
          onMouseEnter={ mouseEnterHandler }
          onMouseLeave={ mouseLeaveHandler }
        >ⓘ</span>
      </p>
      <Info visible={ visibleInfo }/>
      <input 
        type="text"
        onChange={ usernameOnChange }
      />
      <p className="no-select">Password</p>
      <PwField
        onChange={ pwOnChange }
      /> 
      <Button
        onClick={ handleSubmit }
        label={ label.toUpperCase() }
      />
    </form>
  )
}

export default Form