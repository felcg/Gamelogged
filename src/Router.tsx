import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
  FrontPage,
  GameFullInfo,
  Home,
  SignUp,
  Verify,
  Login,
  Profile,
  ForgotPassword,
  PasswordReset,
} from './screens'

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
    <Route exact path="/games/:platform" component={withRouter(FrontPage)} />
    <Route exact path="/games" component={withRouter(FrontPage)} />
    <Route exact path="/profile/:userid" component={withRouter(Profile)} />
    <Route exact path="/" component={withRouter(Home)} />
  </Switch>
)
