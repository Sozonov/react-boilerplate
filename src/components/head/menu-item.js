// @flow
import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Menu = styled(NavLink)`
  padding: 0.5em 1em;
  color: #265778;
  text-decoration: none;
  margin: 2px;
  & :visited {
    color: #265778;
  }
  &:hover {
    background-color: #eee;
  }
`

export default (props: any) => (
  <Menu
    {...props}
    exact
    activeStyle={{
      backgroundColor: '#eee'
    }}
  />
)
