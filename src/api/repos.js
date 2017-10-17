// @flow
import { call } from './call'

type User = {
  id: number,
  login: string,
  avatar_url: string,
  html_url: string
}

export type Repository = {
  id: number,
  name: string,
  html_url: string,
  description: string,
  owner: User
}

const parseUser = (user: mixed): User => {
  const obj = user || {}
  return {
    id: Number(obj.id || 0),
    login: String(obj.id || ''),
    avatar_url: String(obj.id || ''),
    html_url: String(obj.id || '')
  }
}

const parseRepository = (item: mixed): ?Repository => {
  if (item) {
    return {
      id: Number(item.id || 0),
      name: String(item.name || ''),
      html_url: String(item.html_url || ''),
      description: String(item.description || ''),
      owner: parseUser(item.owner || {})
    }
  }
  return null
}

const parseRepositories = (resp: mixed): Repository[] => {
  const items = resp && resp.items ? resp.items : []
  if (Array.isArray(items)) {
    const res = items.map(parseRepository).filter(Boolean)
    return res
  }
  return []
}

export const getPopular = (): Promise<Repository[]> =>
  call('/search/repositories?q=language:javascript&sort=stars&order=desc').then(
    parseRepositories
  )
