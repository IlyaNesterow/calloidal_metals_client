import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getAuthInfo } from '../redux/selectors'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'
import ErrorMessage from '../components/global/ErrorMessage'

import SilverPage from '../components/silver'
import LoginPage from '../components/login'


const Router: React.FC = () => {
  const { loggedIn } = useSelector(getAuthInfo)

  return(
    <BrowserRouter>
      <Navbar/>
      <Menu/>
      <ErrorMessage/>
      <Switch>
        <Redirect
          exact
          from="/"
          to="/silver"
        />
        <Route 
          exact
          path="/silver" 
          component={ SilverPage } 
        />
        {loggedIn
          ? <Redirect
              to="silver"
            />
          : <Route
              exact
              path="/login"
              component={ LoginPage }
            />
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Router