import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { getAppInfo } from '../redux/selectors'
import { DivOnClick } from '../types/functions'


interface Props {
  label: string
  onClick: DivOnClick
  component: React.FC
  id: string
}

export const useLoadingButton: (props: Props) => [ JSX.Element ] = ({ label, onClick, component, id }) => {
  const { loading } = useSelector(getAppInfo)
  const [ buttonLbl, setButtonLbl ] = useState<string | React.FC>(label)

  useEffect(() => {
    loading 
      ? setButtonLbl(component)
      : setButtonLbl(label)
  }, [ loading, label, component ])

  const output = (
    <div 
      id={ id }
      onClick={ onClick }
      className="no-select"
    >
      { buttonLbl }
    </div>
  )

  return [ output ]
}