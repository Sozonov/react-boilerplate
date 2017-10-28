import React from 'react'
import { shallow } from 'enzyme'
import MainPage from './main-page'

describe('<MainPage />', () => {
  let props
  let mounted
  const c = () => {
    if (!mounted) {
      mounted = shallow(<MainPage {...props} />)
    }
    return mounted
  }

  beforeEach(() => {
    props = {}
    mounted = undefined
  })

  it('should render without crash', () => {
    c()
  })
})
