// @flow
import React from 'react'
import { shallow } from 'enzyme'
import Icon from './icon'

describe('<Icon />', () => {
  let props = { name: 'spinner' }
  let mounted
  const c = () => {
    if (!mounted) {
      mounted = shallow(<Icon {...props} />)
    }
    return mounted
  }

  beforeEach(() => {
    props = { name: 'spinner' }
    mounted = undefined
  })

  it('should render without crash', () => {
    c()
  })
})
