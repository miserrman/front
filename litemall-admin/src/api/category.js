import request from '@/utils/request'

export function listCategory(query) {
  return request({
    url: '/categories',
    method: 'get',
    params: query
  })
}

export function uploadPic(picture) {
  return request({
    url: '/pic',
    method: 'post',
    picture
  })
}

export function createCategory(data) {
  return request({
    url: '/categories',
    method: 'post',
    data
  })
}

export function readCategory(id) {
  return request({
    url: '/categories/{id}',
    method: 'get',
    id
  })
}

export function updateCategory(id, data) {
  return request({
    url: '/categories/{id}',
    method: 'put',
    id,
    data
  })
}

export function deleteCategory(id) {
  return request({
    url: '/categories/{id}',
    method: 'delete',
    id
  })
}
