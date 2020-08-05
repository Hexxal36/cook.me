import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import AuthRoutes from './routes/auth'
import RecipeRoutes from './routes/recipe'

import IndexPage from './pages/common/index'
import ErrorPage from './pages/common/error'

const Navigation = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {AuthRoutes.map(p => <Route {...p} />)}
        {RecipeRoutes.map(p => <Route {...p} />)}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation