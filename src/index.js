import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import './fontawesome'
import './assets/custom.scss'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Route component={App} />
    </HashRouter>
  </Provider>,

  document.getElementById('root')
)
