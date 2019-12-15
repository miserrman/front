import request from '@/utils/request'

export function listBrand(query) {
  return request({
    url: '/brands',
    method: 'get',
    params: query
  })
}

export function listOfBrandGoods(id, query) {
  return request({
    url: '/brands/{id}/goods',
    method: 'get',
    params: id, query
  })
}

export function uploadPic(picture) {
  return request({
    url: '/pic',
    method: 'post',
    picture
  })
}

export function createBrand(data) {
  return request({
    url: '/brands',
    method: 'post',
    data
  })
}

export function readBrand(id) {
  return request({
    url: '/brands/{id}',
    method: 'get',
    id
  })
}

export function updateBrand(id, data) {
  return request({
    url: '/brands/{id}',
    method: 'put',
    id,
    data
  })
}

export function deleteBrand(id) {
  return request({
    url: '/brands/{id}',
    method: 'delete',
    id
  })
}
