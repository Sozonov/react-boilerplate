// @flow
import React from 'react'

export type Repository = {
  id: number,
  name: string,
  html_url: string
}

type Props = {
  repos: Repository[]
}

const ReposList = ({ repos }: Props) => (
  <div>
    <h1>Popular js repositories from github</h1>
    {repos.map(repo => (
      <div>
        <b>{repo.name}</b> <br /> url:
        <a href={repo.html_url} target="_blank">
          {repo.html_url}
        </a>
      </div>
    ))}
  </div>
)

export default ReposList
