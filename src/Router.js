import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import Search from './components/Search/Search'
import GameFullInfo from './components/GameFullInfo/GameFullInfo'

export default () => (
  <Switch>
    <Route exact path="/search" component={Search} />
    <Route exact path="/games/:gameId" component={GameFullInfo} />
    <Route exact path="/" component={Frontpage} />
  </Switch>

)
