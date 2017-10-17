// @flow
import React, { Component } from 'react'
import ReposList from 'components/repos/repos-list'
import Loading from 'components/loading'
import { getPopular } from 'api/repos'
import type { Repository } from 'api/repos'

type State = {
  isLoading: boolean,
  repos: Repository[]
}

export default class ReposListConnector extends Component<any, State> {
  state = { isLoading: false, repos: [] }

  componentDidMount = () => {
    this.load()
  }

  load = async () => {
    this.setState({ isLoading: true })
    const repos = await getPopular()
    this.setState({ repos, isLoading: false })
  }

  render() {
    const { isLoading, repos } = this.state
    return <div>{isLoading ? <Loading /> : <ReposList repos={repos} />}</div>
  }
}
