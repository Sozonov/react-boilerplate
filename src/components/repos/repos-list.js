import React from 'react'

const repos = [
  { id: 1, name: 'react', html_url: 'http://react' },
  { id: 2, name: 'redux', html_url: 'http://redux' }
]

const ReposList = () => (
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

ReposList.propTypes = {}
ReposList.defaultProps = {}

export default ReposList
