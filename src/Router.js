import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Frontpage from './components/Frontpage/Frontpage'
import GameFullInfo from './components/GameFullInfo/GameFullInfo'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/SignUp'
import Verify from './components/Verify/Verify'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import PasswordReset from './components/PasswordReset/PasswordReset'

export default () => (
  <Switch>
    <Route exact path="/login" component={withRouter(Login)} />
    <Route exact path="/verify/:email" component={withRouter(Verify)} />
    <Route
      exact
      path="/forgotPassword"
      component={withRouter(ForgotPassword)}
    />
    <Route
      exact
      path="/passwordReset/:email/:token"
      component={withRouter(PasswordReset)}
    />
    <Route exact path="/signup" component={withRouter(SignUp)} />
    <Route exact path="/games/:gameId" component={withRouter(GameFullInfo)} />
    <Route exact path="/games/:platform" component={withRouter(Frontpage)} />
    <Route exact path="/games" component={withRouter(Frontpage)} />
    <Route exact path="/profile/:userid" component={withRouter(Profile)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>
)
