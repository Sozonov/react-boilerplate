// @flow
import React from 'react'
import ReposList from 'components/repos/repos-list'

const repos = [
  { id: 1, name: 'react', html_url: 'http://react' },
  { id: 2, name: 'redux', html_url: 'http://redux' }
]

export default () => <ReposList repos={repos} />
