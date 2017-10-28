// @flow
import React, { Component } from 'react'
import Loading from 'components/loading/full-page-loader'
import ReposList from 'components/repos/repos-list'
import { getPopular } from 'api/repos'
import type { Repository } from 'api/repos'
import Alert from 'components/alert/alert'

type State = {
  isLoading: boolean,
  repos: Repository[],
  error: boolean
}

export default class ReposListConnector extends Component<any, State> {
  state = { isLoading: true, repos: [], error: false }

  componentDidMount = () => this.loadData()

  getError = () => (
    <Alert>
      Cannot load repository list. <br /> Sorry :(
    </Alert>
  )

  loadData = async () => {
    try {
      this.setState({ isLoading: true })
      const repos = await getPopular()
      this.setState({ repos, isLoading: false })
    } catch (error) {
      this.setState({ error: true, isLoading: false })
    }
  }

  render() {
    const { isLoading, repos, error } = this.state

    return (
      <div>
        {!isLoading && !error ? <ReposList repos={repos} /> : null}
        {!isLoading && error ? this.getError() : null}
        {isLoading ? <Loading /> : null}
      </div>
    )
  }
}
