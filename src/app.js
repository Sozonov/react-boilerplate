import React from 'react'
import { Route, Link } from 'react-router-dom'

import MainPage from 'components/main-page'
import ReposPage from 'components/repos'

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/repos">Repos</Link>
      </li>
    </ul>
    <hr />
    <Route exact path="/" component={MainPage} />
    <Route path="/repos" component={ReposPage} />
  </div>
)

App.propTypes = {}
App.defaultProps = {}

export default App
