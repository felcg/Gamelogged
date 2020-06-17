import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import Search from './components/Search/Search'

export default () => (
  <Switch>
    <Route exact path="/" component={Frontpage} />
    <Route exact path="/search" component={Search} />
  </Switch>

)
