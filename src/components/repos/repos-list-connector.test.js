import React from 'react'
import { mount } from 'enzyme'
import * as reposApi from 'api/repos'
import Loading from 'components/loading/full-page-loader'
import Alert from 'components/alert/alert'
import ReposListConnector from './repos-list-connector'
import ReposList from './repos-list'

describe('<ReposListConnector />', () => {
  let props
  let mounted
  const c = () => {
    if (!mounted) {
      mounted = mount(<ReposListConnector {...props} />)
    }
    return mounted
  }

  beforeEach(() => {
    props = {}
    mounted = undefined
    reposApi.getPopular = jest.fn(() => [{ id: 1 }, { id: 2 }])
  })

  it('should render repos-list component with items if success', async () => {
    await expect(c().find(Loading).length).toBe(1)
    c().update()
    expect(c().find(ReposList).length).toBe(1)
    expect(
      c()
        .find(ReposList)
        .props().repos
    ).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should render error message when loading failed', async () => {
    reposApi.getPopular = jest.fn(() => Promise.reject())
    await c()
    c().update()
    expect(c().find(Alert).length).toBe(1)
  })
})
