import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { SpecificRoute } from './SpecificRoute'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'
import ErrorMessage from '../components/global/ErrorMessage'

import SilverPage from '../components/silver'
import LoginPage from '../components/login'


const Router: React.FC = () => (
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
      <SpecificRoute
        exact
        path="/login"
        redirectTo="/silver"
        component={ LoginPage }
      />
    </Switch>
  </BrowserRouter>
)


export default Router