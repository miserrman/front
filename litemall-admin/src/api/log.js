import request from '@/utils/request'

export function listLog(query) {
  return request({
    url: '/logs',
    method: 'get',
    params: query
  })
}
