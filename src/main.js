import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'


const entry = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <App />,
    entry
  )
}

render()

if (module.hot) {
  module.hot.accept('./app', render)
}
