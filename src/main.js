// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'

const entry = document.getElementById('app')
const env = process.env.NODE_ENV || 'development'

const renderDev = () => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    // flow-ignore
    entry
  )
}

const render = () => {
  // flow-ignore
  ReactDOM.render(<App />, entry)
}

if (env === 'development') {
  renderDev()
} else {
  render()
}

if (module.hot) {
  // flow-ignore
  module.hot.accept('./app', renderDev)
}
