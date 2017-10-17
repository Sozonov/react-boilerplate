// @flow
import React from 'react'
import styled from 'styled-components'
import type { Repository } from 'api/repos'

const Repo = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid gray;
  &:hover {
    background-color: lightgray;
  }
`

type Props = {
  repos: Repository[]
}

const ReposList = ({ repos }: Props) => (
  <div>
    <h1>Popular js repositories from github</h1>
    {repos.map(repo => (
      <Repo>
        <b>{repo.name}</b> <br />
        <a href={repo.html_url} target="_blank">
          {repo.html_url}
        </a>
      </Repo>
    ))}
  </div>
)

export default ReposList
