import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import GameFullInfo from './components/GameFullInfo/GameFullInfo'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'

export default () => (
  <Switch>
    <Route exact path="/signup" component={withRouter(SignUp)} />
    <Route exact path="/games/:gameId" component={withRouter(GameFullInfo)} />
    <Route exact path="/platforms/:platform" component={withRouter(Frontpage)} />
    <Route exact path="/platforms" component={withRouter(Frontpage)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>

)
