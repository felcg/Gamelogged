import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import GameFullInfo from './components/GameFullInfo/GameFullInfo'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Verify from './components/Verify/Verify'
import Login from './components/Login/Login'

export default () => (
  <Switch>
    <Route exact path="/login" component={withRouter(Login)} />
    <Route exact path="/verify" component={withRouter(Verify)} />
    <Route exact path="/signup" component={withRouter(SignUp)} />
    <Route exact path="/games/:gameId" component={withRouter(GameFullInfo)} />
    <Route exact path="/platforms/:platform" component={withRouter(Frontpage)} />
    <Route exact path="/platforms" component={withRouter(Frontpage)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>

)
