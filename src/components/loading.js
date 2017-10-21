// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from 'components/icon'

const Wrapper = styled.span`
  text-align: center;
  font-size: 1.5em;
  color: #636363;
  padding-left: 20px;
`

const Loading = () => (
  <Wrapper>
    <Icon name="spinner" size={100} />
    <br />
  </Wrapper>
)

export default Loading
