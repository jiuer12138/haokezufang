import request from '@/utils/request'
export const findHouse = (id) =>
  request({
    url: `/houses/condition?id=${id}`
  })
export const HouseDetail = (id) =>
  request({
    url: `/houses/${id}`
  })
export const selectHouse = (params) =>
  request({
    url: '/houses',
    params
  })
export const getHouseConditions = () =>
  request({
    url: '/houses/params'
  })
