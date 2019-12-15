import request from '@/utils/request'

export function listAd(query) {
  return request({
    url: '/ads',
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

export function createAd(data) {
  return request({
    url: '/ads',
    method: 'post',
    data
  })
}

export function readAd(id) {
  return request({
    url: '/ads/{id}',
    method: 'get',
    id
  })
}

export function updateAd(id, data) {
  return request({
    url: '/ads/{id}',
    method: 'put',
    id,
    data
  })
}

export function deleteAd(id) {
  return request({
    url: '/ads/{id}',
    method: 'delete',
    id
  })
}
