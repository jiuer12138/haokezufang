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
export const addCollect = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'POST'
  })
export const removeCollect = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'DELETE'
  })
export const judgeCollect = (id) =>
  request({
    url: `/user/favorites/${id}`
  })
export const rental = (data) =>
  request({
    url: '/user/houses',
    method: 'POST',
    data: data
  })
export const upImage = (fm) =>
  request({
    url: '/houses/image',
    method: 'POST',
    data: fm
  })
