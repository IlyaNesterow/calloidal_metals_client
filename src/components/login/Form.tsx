import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputOnChange, ButtonOnClick } from '../../types/functions'
import PwField from '../global/PasswordField'
import { setError } from '../../redux/actions'


const Form: React.FC<{ label: string }> = ({ label }) => {
  const dispatch = useDispatch()

  const [ username, setUsername ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  
  const pwOnChange: InputOnChange = (e) => setPassword(e.target.value.trim())

  const usernameOnChange: InputOnChange = (e) => setUsername(e.target.value)

  const handleSubmit: ButtonOnClick = (e) => {
    e.preventDefault()
    console.log('entered')
    if(password.length < 5) return dispatch(setError('Password does not seem to match'))
    if(username.length < 5) return dispatch(setError('Username is to short'))
    //will be replaced
    console.log({ password, username })
  }

  return(
    <form>
      <p className="no-select">Email Address</p>
      <input 
        type="text"
        onChange={ usernameOnChange }
      />
      <p className="no-select">Password</p>
      <PwField
        onChange={ pwOnChange }
      /> 
      <button 
        onClick={ handleSubmit }
        className="no-select"
      >
        { label.toUpperCase() }
      </button>
    </form>
  )
}

export default Form