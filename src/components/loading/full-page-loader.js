import React from 'react'
import styled from 'styled-components'
import Loading from 'components/loading/loading'

const Cont = styled.div`
  text-align: center;
`

const FullPageLoader = () => <div>i am client</div>

FullPageLoader.propTypes = {}
FullPageLoader.defaultProps = {}

export default () => (
  <Cont>
    <Loading />
  </Cont>
)
