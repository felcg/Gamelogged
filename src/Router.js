import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Component from './components/index'

export default () => (
  <Switch>
    <Route exact path="/" component={Component} />
  </Switch>

)
