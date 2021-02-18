import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { getAuthInfo } from '../redux/selectors'

interface PrivateRouteProps extends RouteProps {
  component: any
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ 
  component: Component, 
  ...rest 
}) => {
  const { loggedIn } = useSelector(getAuthInfo)

  return (
    <Route
      render={(props) =>
        loggedIn === true 
          ? <Component {...props} /> 
          : <Redirect to="/" />
      }
      {  ...rest }
    />
  )
}