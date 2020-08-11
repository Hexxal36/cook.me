import React, { useContext } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import AuthRoutes from './routes/auth'
import RecipeRoutes from './routes/recipe'

import IndexPage from './pages/common/index'
import ErrorPage from './pages/common/error'

import LoginRedirect from './components/login-redirect'

import UserContext from './Context'

const Navigation = () => {
  const context = useContext(UserContext)
  const loggedIn = context.user.loggedIn


  const getComponent = (p) => {
    if(p.auth) {
      return loggedIn ? p.component : LoginRedirect
    }
    return p.component
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {AuthRoutes.map((p, i)  => <Route key={i} {...p} />)}
        {RecipeRoutes.map((p, i) => {
          return(<Route key={i} path={p.path} component={ getComponent(p) } />)
        })}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation