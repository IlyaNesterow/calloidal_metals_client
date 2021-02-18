import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'

import SilverPage from '../components/silver'


const Router: React.FC = () => (
  <BrowserRouter>
    <Navbar/>
    <Menu/>
    <Switch>
      <Redirect
        from="/"
        to="/silver"
      />
      <Route 
        exact
        path="/silver" 
        component={ SilverPage } 
      />
    </Switch>
  </BrowserRouter>
)

export default Router