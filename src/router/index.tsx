import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from '../components/global/navbar'
import Menu from '../components/global/menu/Menu'
import ErrorMessage from '../components/global/ErrorMessage'

import Page from '../components/page'

import { pages, Content, PageName } from '../types'

interface Props {
  content: Content
}

const Router: React.FC<Props> = ({ content }) => {
  const createPages: (() => JSX.Element[]) = () => 
    pages.map((pg: PageName, index) =>
      <Route 
        exact
        path={`/${ pg }`} 
        key={ pg + index }
        component={() => 
          <Page 
            page={ pg }
            content={ content }
          /> 
        } 
      />
    )

  return (
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
        { createPages() }
      </Switch>
    </BrowserRouter>
  )
}

export default React.memo(Router)