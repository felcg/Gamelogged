import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from './components/index'
import Search from './components/Search/Search'

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/search" component={Search} />
  </Switch>

)
