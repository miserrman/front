import request from '@/utils/request'

export function listCoupon(query) {
  return request({
    url: '/coupons',
    method: 'get',
    params: query
  })
}

export function listAvailableCoupon(query) {
  return request({
    url: '/coupons/availableCoupons',
    method: 'get',
    params: query
  })
}

export function listCouponRules(query) {
  return request({
    url: '/couponRules',
    method: 'get',
    params: query
  })
}

export function createCoupon(data) {
  return request({
    url: '/coupons',
    method: 'post',
    data
  })
}

export function readCoupon(id) {
  return request({
    url: '/coupons/{id}',
    method: 'get',
    params: { id }
  })
}

export function updateCoupon(id, data) {
  return request({
    url: '/coupon/update',
    method: 'post',
    id,
    data
  })
}

export function updateCouponRules(id, data) {
  return request({
    url: '/couponRules/{id}',
    method: 'put',
    id,
    data
  })
}

export function deleteCoupon(id) {
  return request({
    url: '/coupons/{id}',
    method: 'delete',
    id
  })
}

export function deleteCouponRules(id) {
  return request({
    url: '/couponRules/{id}',
    method: 'delete',
    id
  })
}

export function listCouponUser(query) {
  return request({
    url: '/coupon/listUser',
    method: 'get',
    params: query
  })
}
