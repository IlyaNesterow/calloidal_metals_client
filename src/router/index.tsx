import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { SpecificRoute } from './SpecificRoute'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'
import ErrorMessage from '../components/global/ErrorMessage'

import Page from '../components/page'
import LoginPage from '../components/login'

import { Pages } from '../types/index'


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
      {Pages.map(pg =>
        <Route 
          exact
          path={`/${ pg }`} 
          key={ pg }
          component={() => 
            <Page 
              page={ pg }
              maxSlides={ 2 }
            /> 
          } 
        />)
      }
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