import request from '@/utils/request'

export const login = (username, password) =>
  request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })

export const userInfo = () =>
  request({
    url: '/user'
  })
export const favorateList = () =>
  request({
    url: '/user/favorites'
  })
export const rentList = () =>
  request({
    url: '/user/houses'
  })
