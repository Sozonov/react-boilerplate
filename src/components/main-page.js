// @flow
import React from 'react'
import styled from 'styled-components'

const Cont = styled.div`
  text-align: center;
  li {
    list-style-type: none;
  }
`

export default () => (
  <Cont>
    <h1>About starter kit</h1>
    This is starter kit for react applications. <br />
    <br />
    <b>We have:</b>
    <ul>
      <li>React 16</li>
      <li>React router 4</li>
      <li>Hot module replacement</li>
      <li>Flow (static type checker)</li>
      <li>Vendor libs extracted to separate js (webpack-dll-plugin)</li>
      <li>SVG files</li>
      <li>Styled-components</li>
    </ul>
  </Cont>
)
