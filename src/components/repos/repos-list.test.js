// @flow
import React from 'react'
import { shallow } from 'enzyme'
import type { Repository } from 'api/repos'
import ReposList, { Repo } from './repos-list'

describe('<ReposList />', () => {
  let props: { repos: Repository[] } = { repos: [] }
  let mounted
  const c = () => {
    if (!mounted) {
      mounted = shallow(<ReposList {...props} />)
    }
    return mounted
  }

  beforeEach(() => {
    props = { repos: [] }
    mounted = undefined
  })

  it('should render h1', () => {
    expect(c().find('h1').length).toBe(1)
  })

  it('should render array of Repo', () => {
    // flow-ignore
    props = { repos: [{ id: 1 }, { id: 2 }] }
    const repos = c().find(Repo)
    expect(repos.length).toBe(2)
    expect(repos.at(0).props().repo).toEqual({ id: 1 })
    expect(repos.at(1).props().repo).toEqual({ id: 2 })
  })
})
