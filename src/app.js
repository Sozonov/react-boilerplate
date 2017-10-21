// @flow
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Route } from 'react-router-dom'

import MainPage from 'components/main-page'
import ReposPage from 'components/repos'
import Header from 'components/head'
import MainMenu from 'components/head/main-menu'
import MenuItem from 'components/head/menu-item'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body, html{
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.8;
    color: #333333;
  }
  ul{
    margin: 0 0 1em 1em;
    padding: 0;
  }
`

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
`

const App = () => (
  <Container>
    <Header>
      <h1>React boilerplate</h1>
      <MainMenu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/repos">Popular github repos</MenuItem>
      </MainMenu>
    </Header>
    <Route exact path="/" component={MainPage} />
    <Route path="/repos" component={ReposPage} />
  </Container>
)

App.propTypes = {}
App.defaultProps = {}

export default App
