import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'
import ErrorMessage from '../components/global/ErrorMessage'

import Page from '../components/page'

import { Pages, Content } from '../types/index'

interface Props {
  content: Content
}

const Router: React.FC<Props> = ({ content }) => (
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
              content={ content }
            /> 
          } 
        />)
      }
    </Switch>
  </BrowserRouter>
)

export default React.memo(Router)