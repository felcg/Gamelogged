import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import './fontawesome'
import './assets/custom.scss'
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
)
