// @flow
import React from 'react'
import styled from 'styled-components'
import type { Repository } from 'api/repos'

const Repo = styled.div`
  font-family: Consolas, Courier, monospace;
  color: #333;
  background: rgb(250, 250, 250);
  margin: 10px 0;
  border: 1px solid #eee;
  border-radius: 10px;
  a,
  a:visited {
    color: #265778;
    text-decoration: none;
  }
`
const Cont = styled.div`
  text-align: center;
`

type Props = {
  repos: Repository[]
}

const ReposList = ({ repos }: Props) => (
  <Cont>
    <h1>Popular js repositories from github</h1>
    {repos.map(repo => (
      <Repo key={repo.id}>
        <b>{repo.name}</b> <br />
        <a href={repo.html_url} target="_blank">
          {repo.html_url}
        </a>
      </Repo>
    ))}
  </Cont>
)

export default ReposList
