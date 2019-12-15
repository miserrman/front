import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/admins/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/admins/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/admins/info',
    method: 'get',
    params: { token }
  })
}

