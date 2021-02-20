import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import Eye from '../../resources/assets/Eye'
import Container from '../../styles/passwordField'
import { InputOnChange, DivOnClick } from '../../types/functions'
import { getThemeInfo } from '../../redux/selectors'

interface PwFieldProps {
  onChange: InputOnChange
}

const PwField: React.FC<PwFieldProps> = ({ onChange }) => {
  const [ visible, setVisible ] = useState<boolean>(false)

  const input = useRef<HTMLInputElement>(null)

  const { theme } = useSelector(getThemeInfo)

  const EyeOnClick: DivOnClick = () => {
    setVisible(!visible)
    if(input.current !== null){
      visible
        ? input.current.type = 'password'
        : input.current.type = 'text'
      input.current.focus()
    }
  }
  
  return(
    <Container
      visible={ visible }
      darkTheme={ theme }
    >
      <input 
        ref={ input }
        type="password"
        onChange={ onChange }
      />
      <Eye 
        id="eye"
        onClick={ EyeOnClick }
      />
    </Container>
  )
}

export default PwField