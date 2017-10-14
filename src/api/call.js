// @flow
import axios from 'axios'

const baseUrl = 'https://api.github.com'

export const call = (
  endpoint: string,
  method: string = 'get',
  params: Object = {}
): Promise<*> =>
  axios({
    method,
    url: `${baseUrl}${endpoint}`,
    params
  }).then(resp => resp.data)
