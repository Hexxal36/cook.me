import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import IndexPage from './pages/index'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorPage from './pages/error'

const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={RegisterPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation