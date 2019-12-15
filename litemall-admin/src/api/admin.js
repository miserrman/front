import request from '@/utils/request'

export function listAdmin(query) {
  return request({
    url: '/admins',
    method: 'get',
    params: query
  })
}

export function createAdmin(data) {
  return request({
    url: '/admins',
    method: 'post',
    data
  })
}

export function readAdmin(id) {
  return request({
    url: '/admins/{id}',
    method: 'get',
    id
  })
}

export function updateAdmin(id, data) {
  return request({
    url: '/admins/{id}',
    method: 'put',
    id,
    data
  })
}

export function deleteAdmin(id) {
  return request({
    url: '/admins/{id}',
    method: 'delete',
    id
  })
}
