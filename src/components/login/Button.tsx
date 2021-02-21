import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ButtonOnClick } from '../../types/functions'
import { getAppInfo } from '../../redux/selectors'

interface Props {
  label: string
  onClick: ButtonOnClick
}

const Button: React.FC<Props> = ({ onClick, label })  => {
  const { loading } = useSelector(getAppInfo)
  const [ buttonLbl, setButtonLbl ] = useState<string | React.FC>(label)

  useEffect(() => {
    loading 
      ? setButtonLbl('Vasya')
      : setButtonLbl(label)
  }, [ loading, label ])

  return(
    <button 
      onClick={ onClick }
      className="no-select"
    >
      { buttonLbl }
    </button>
  )
}

export default Button