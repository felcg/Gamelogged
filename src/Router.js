import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Index from './components/Index/index'
import Search from './components/Search/Search'
import Platform from './components/Platform/Platform'

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/platform/:platform" component={Platform} />
  </Switch>

)
