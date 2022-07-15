import request from '@/utils/request'

export const login = (username, password) =>
  request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })

export const userInfo = (authorization) =>
  request({
    url: '/user',
    headers: { Authorization: `Bearer ${authorization}` }
  })
