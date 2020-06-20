import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './assets/custom.scss'
import App from './App'
import './fontawesome'


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
)
