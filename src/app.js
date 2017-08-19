import React from 'react'
import { Route, Link } from 'react-router-dom'

import MainPage from 'containers/main-page'
import AboutPage from 'containers/about'


const App = () =>
  (<div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <hr />
    <Route exact path="/" component={MainPage} />
    <Route path="/about" component={AboutPage} />
  </div>)

App.propTypes = {}
App.defaultProps = {}


export default App
